import { Navbar } from '@components/Navbar';

import '../styles/globals.css';
import { ContentWrapper } from 'container/ContentWrapper';
import ThemeWrapper from 'container/ThemeWrapper';
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

    <ThemeWrapper>
      <Navbar />
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
    </ThemeWrapper>
  </RecoilRoot>
);
export default MyApp;
