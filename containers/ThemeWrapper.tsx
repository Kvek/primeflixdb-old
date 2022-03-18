import { FC } from 'react';

import { ThemeProvider } from '@emotion/react';

import { AppWrapper } from '@containers/AppWrapper';

import { ShowDarkTheme } from '@store/atoms/ShowDarkTheme.atom';

import { useRecoilValue } from 'recoil';
import { DARK_THEME, LIGHT_THEME, themeConfiguration } from 'theme';

const ThemeWrapper: FC = ({ children }) => {
  const isDarkTheme = useRecoilValue(ShowDarkTheme);

  const currentTheme = isDarkTheme ? DARK_THEME : LIGHT_THEME;

  const theme = { ...currentTheme, ...themeConfiguration };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>{children}</AppWrapper>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
