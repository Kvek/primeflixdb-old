import 'styled-components';
import { GlobalThemeInterface, ThemeColorsInterface } from 'theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme
    extends GlobalThemeInterface,
      ThemeColorsInterface {}
}
