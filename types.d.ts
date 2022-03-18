import '@emotion/react';
import { GlobalThemeInterface, ThemeColorsInterface } from 'theme';

export interface SvgPropsInterface {
  onClick: () => void;
}

export interface MenuItemsInterface {
  isActive?: boolean;
}

// and extend them!
declare module '@emotion/react' {
  export interface Theme extends GlobalThemeInterface, ThemeColorsInterface {}
}
