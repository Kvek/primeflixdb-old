import React, { FC } from 'react';

import { DarkTheme } from '@store/atoms/DarkTheme';

import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { DARK_THEME, LIGHT_THEME, themeConfiguration } from 'theme';

import { AppWrapper } from './AppWrapper';

const ThemeWrapper: FC = ({ children }) => {
  const isDarkTheme = useRecoilValue(DarkTheme);

  const currentTheme = isDarkTheme ? DARK_THEME : LIGHT_THEME;

  const theme = { ...currentTheme, ...themeConfiguration };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>{children}</AppWrapper>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
