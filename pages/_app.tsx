import { useEffect } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import { ContentWrapper } from '@containers/ContentWrapper';
import ThemeWrapper from '@containers/ThemeWrapper';

import { Navbar } from '@components/Navbar';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { muiTheme } from 'theme';

const FloatingButtons = dynamic(() => import('../components/FloatingButtons'));

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
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
        <ThemeProvider theme={muiTheme}>
          <Navbar />
          <FloatingButtons />
          <ContentWrapper>
            <Component {...pageProps} />
          </ContentWrapper>
        </ThemeProvider>
      </ThemeWrapper>
    </RecoilRoot>
  );
};
export default MyApp;
