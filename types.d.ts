import 'styled-components';
import { GlobalThemeInterface, ThemeColorsInterface } from 'theme';

export interface SvgPropsInterface {
  onClick: () => void;
}

export interface MenuItemsInterface {
  isActive?: boolean;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme
    extends GlobalThemeInterface,
      ThemeColorsInterface {}
}
