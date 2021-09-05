import React, { FC } from 'react';

import { ThemeProvider } from 'styled-components';
import { DARK_THEME, themeConfiguration } from 'theme';

const AppWrapper: FC = ({ children }) => {
  const theme = { ...DARK_THEME, ...themeConfiguration };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppWrapper;
