import {
  AppPropsType,
  AppType,
  DocumentContext,
} from 'next/dist/shared/lib/utils';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    const styledComponentsSheetComponent = (
      Component: AppType,
      props: AppPropsType
    ) => sheet.collectStyles(<Component {...props} />);

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
      };
    } finally {
      sheet.seal();
    }
  }
}
