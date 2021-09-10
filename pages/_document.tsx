import { ServerStyleSheets as MaterialUIServerStyleSheets } from '@material-ui/styles';

import {
  AppPropsType,
  AppType,
  DocumentContext,
  RenderPageResult,
} from 'next/dist/shared/lib/utils';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<RenderPageResult> {
    const sheet = new ServerStyleSheet();
    const materialSheets = new MaterialUIServerStyleSheets();

    const originalRenderPage = ctx.renderPage;

    const styledComponentsSheetComponent = (
      Component: AppType,
      props: AppPropsType
    ) => sheet.collectStyles(materialSheets.collect(<Component {...props} />));

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => (props: AppPropsType) =>
            styledComponentsSheetComponent(App, props),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      } as RenderPageResult;
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
