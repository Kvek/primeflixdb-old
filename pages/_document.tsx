import {
  AppPropsType,
  AppType,
  DocumentContext,
} from 'next/dist/shared/lib/utils';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    const styledComponentsSheetComponent = (
      Component: AppType,
      props: AppPropsType
    ) => {
      return sheet.collectStyles(<Component {...props} />);
    };

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App: AppType) => (props: AppPropsType) =>
            styledComponentsSheetComponent(App, props),
        });
      };

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

  render() {
    return (
      <Html>
        <Head>
          <title>PrimeflixDB</title>
          <meta charSet="utf-8" />
          <link href="logo.svg" rel="icon" sizes="16x16" type="image/svg+xml" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
