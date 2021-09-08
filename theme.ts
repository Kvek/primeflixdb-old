import 'styled-components';

export interface ThemeColorsInterface {
  bgColor: string;
  borderColor: string;
  boxShadow: string;
  color: string;
  hoverBorderColor: string;
}

export interface BreakPointsInterface {
  lg: string;
  md: string;
  sm: string;
  xl: string;
  xxl: string;
}

export interface GlobalThemeInterface {
  breakPoints: BreakPointsInterface;
  colors: ColorsInterface;
  transitionFunction: string;
  transitionSpeed: string;
}

export interface ColorsInterface {
  BLACK: string;
  ERROR: string;
  GRAYISH_YELLOW: string;
  LIGHT_BORDER: string;
  LIGHT_BORDER_HOVER: string;
  LIGHT_GRAYISH_YELLOW: string;
  MODERATE_CYAN: string;
  VERY_DARK_BLUE: string;
  VERY_LIGHT_GRAY: string;
  WHITE: string;
}

// --------------------------------------------------//

// colors
export const VERY_LIGHT_GRAY = '#f5f5f5';
export const VERY_DARK_BLUE = '#121a27';
export const ERROR = '#f44336';
export const GRAYISH_YELLOW = '#FDF1DE';
export const MODERATE_CYAN = '#35d0ba';
export const BLACK = '#000000';
export const WHITE = '#ffffff';
export const LIGHT_GRAYISH_YELLOW = '#ffffb8';
export const LIGHT_BORDER = 'rgba(255, 235, 235, 0.2)';
export const LIGHT_BORDER_HOVER = 'rgba(0, 0, 0, 0.4)';
export const DARK_BORDER_HOVER = 'rgba(255, 235, 235, 0.5)';

// animation
export const TRANSITION_FUNCTION = 'cubic-bezier(0.4, 0, 1, 1)';
export const TRANSITION_SPEED = '0.15s';

export const BREAK_POINTS = {
  lg: '992px',
  md: '768px',
  sm: '576px',
  xl: '1200px',
  xxl: '1400px',
};

export const DEVICE_BREAK_POINTS: BreakPointsInterface = {
  lg: `(min-width: ${BREAK_POINTS.lg})`,
  md: `(min-width: ${BREAK_POINTS.md})`,
  sm: `(min-width: ${BREAK_POINTS.sm})`,
  xl: `(min-width: ${BREAK_POINTS.xl})`,
  xxl: `(min-width: ${BREAK_POINTS.xxl})`,
};

export const COLORS: ColorsInterface = {
  BLACK,
  ERROR,
  GRAYISH_YELLOW,
  LIGHT_BORDER,
  LIGHT_BORDER_HOVER,
  LIGHT_GRAYISH_YELLOW,
  MODERATE_CYAN,
  VERY_DARK_BLUE,
  VERY_LIGHT_GRAY,
  WHITE,
};

export const themeConfiguration: GlobalThemeInterface = {
  breakPoints: DEVICE_BREAK_POINTS,
  colors: COLORS,
  transitionFunction: TRANSITION_FUNCTION,
  transitionSpeed: TRANSITION_SPEED,
};

export const LIGHT_THEME: ThemeColorsInterface = {
  bgColor: GRAYISH_YELLOW,
  borderColor: VERY_DARK_BLUE,
  boxShadow: BLACK,
  color: VERY_DARK_BLUE,
  hoverBorderColor: LIGHT_BORDER_HOVER,
};

export const DARK_THEME: ThemeColorsInterface = {
  bgColor: BLACK,
  borderColor: LIGHT_BORDER,
  boxShadow: GRAYISH_YELLOW,
  color: LIGHT_GRAYISH_YELLOW,
  hoverBorderColor: DARK_BORDER_HOVER,
};
