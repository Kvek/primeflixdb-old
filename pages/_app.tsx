import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

const theme = {};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>PrimeflixDB</title>
        <meta charSet="utf-8" />
        <link href="logo.svg" rel="icon" sizes="16x16" type="image/svg+xml" />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
