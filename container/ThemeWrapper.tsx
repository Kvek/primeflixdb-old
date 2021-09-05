import React, { FC } from 'react';

import { ThemeProvider } from 'styled-components';
import { DARK_THEME, themeConfiguration } from 'theme';

import { AppWrapper } from './AppWrapper';

const ThemeWrapper: FC = ({ children }) => {
  const theme = { ...DARK_THEME, ...themeConfiguration };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>{children}</AppWrapper>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
