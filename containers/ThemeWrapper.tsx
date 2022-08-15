import { FC } from 'react';

import { ThemeProvider } from '@emotion/react';

import { AppWrapper } from '@containers/AppWrapper';

import { DARK_THEME, themeConfiguration } from 'theme';

const ThemeWrapper: FC = ({ children }) => {
  const theme = { ...DARK_THEME, ...themeConfiguration };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>{children}</AppWrapper>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
