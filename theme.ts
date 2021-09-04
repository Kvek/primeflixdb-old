import 'styled-components';

export interface ThemeColorsInterface {
  bgColor: string;
  borderColor: string;
  boxShadow: string;
  color: string;
  hoverBorderColor: string;
}

export interface BreakPointsInterface {
  desktop: string;
  desktopL: string;
  laptop: string;
  laptopL: string;
  mobileL: string;
  mobileM: string;
  mobileS: string;
  tablet: string;
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
  SOFT_BLUE: string;
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
export const SOFT_BLUE = '#7298f3';
export const LIGHT_GRAYISH_YELLOW = '#ffffb8';
export const LIGHT_BORDER = 'rgba(255, 235, 235, 0.2)';
export const LIGHT_BORDER_HOVER = 'rgba(0, 0, 0, 0.4)';
export const DARK_BORDER_HOVER = 'rgba(255, 235, 235, 0.5)';

// animation
export const TRANSITION_FUNCTION = 'cubic-bezier(0.4, 0, 1, 1)';
export const TRANSITION_SPEED = '0.15s';

export const BREAK_POINTS = {
  desktop: '2560px',
  laptop: '1024px',
  laptopL: '1440px',
  mobileL: '425px',
  mobileM: '375px',
  mobileS: '320px',
  tablet: '768px',
};

export const DEVICE_BREAK_POINTS: BreakPointsInterface = {
  desktop: `(min-width: ${BREAK_POINTS.desktop})`,
  desktopL: `(min-width: ${BREAK_POINTS.desktop})`,
  laptop: `(min-width: ${BREAK_POINTS.laptop})`,
  laptopL: `(min-width: ${BREAK_POINTS.laptopL})`,
  mobileL: `(min-width: ${BREAK_POINTS.mobileL})`,
  mobileM: `(min-width: ${BREAK_POINTS.mobileM})`,
  mobileS: `(min-width: ${BREAK_POINTS.mobileS})`,
  tablet: `(min-width: ${BREAK_POINTS.tablet})`,
};

export const COLORS: ColorsInterface = {
  BLACK,
  ERROR,
  GRAYISH_YELLOW,
  LIGHT_BORDER,
  LIGHT_BORDER_HOVER,
  LIGHT_GRAYISH_YELLOW,
  MODERATE_CYAN,
  SOFT_BLUE,
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
  color: BLACK,
  hoverBorderColor: LIGHT_BORDER_HOVER,
};

export const DARK_THEME: ThemeColorsInterface = {
  bgColor: BLACK,
  borderColor: LIGHT_BORDER,
  boxShadow: LIGHT_GRAYISH_YELLOW,
  color: GRAYISH_YELLOW,
  hoverBorderColor: DARK_BORDER_HOVER,
};
