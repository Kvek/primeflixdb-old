import { ContentWrapper } from '@containers/ContentWrapper';
import ThemeWrapper from '@containers/ThemeWrapper';

import { FloatingButton } from '@components/FloatingButton';
import { Navbar } from '@components/Navbar';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <RecoilRoot>
    <Head>
      <title>PrimeflixDB</title>
      <meta charSet="utf-8" />
      <meta
        content="PrimeflixDB is a website to view information about movies and tv shows"
        name="description"
      />
      <meta content="#000000" name="theme-color" />
      <link href="logo.svg" rel="icon" sizes="16x16" type="image/svg+xml" />
      <link href="/maskable_icon.png" rel="apple-touch-icon" />
    </Head>

    <ThemeWrapper>
      <Navbar />
      <FloatingButton />
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
    </ThemeWrapper>
  </RecoilRoot>
);
export default MyApp;
