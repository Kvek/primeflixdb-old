import { Provider } from 'react-redux';

import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createEmotionCache } from '@pages/_document';

import { ContentWrapper } from '@containers/ContentWrapper';
import ThemeWrapper from '@containers/ThemeWrapper';

import { Navbar } from '@components/Navbar';

import { store } from '@store/index';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { muiTheme } from 'theme';

interface MyAppPropsInterface extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppPropsInterface): JSX.Element => (
  <Provider store={store}>
    <CacheProvider value={emotionCache}>
      <Head>
        <title>PrimeflixDB</title>
        <meta charSet="utf-8" />
        <meta
          content="PrimeflixDB is a website to view information about movies and tv shows"
          name="description"
        />
        <meta content={'#000'} name="theme-color" />
      </Head>

      <ThemeWrapper>
        <ThemeProvider theme={muiTheme}>
          <Navbar />

          <ContentWrapper>
            <Component {...pageProps} />
          </ContentWrapper>
        </ThemeProvider>
      </ThemeWrapper>
    </CacheProvider>
  </Provider>
);
export default MyApp;
