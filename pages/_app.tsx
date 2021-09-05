import '../styles/globals.css';
import AppWrapper from 'container/AppWrapper';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Head>
      <title>PrimeflixDB</title>
      <meta charSet="utf-8" />
      <link href="logo.svg" rel="icon" sizes="16x16" type="image/svg+xml" />
    </Head>

    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  </RecoilRoot>
);
export default MyApp;
