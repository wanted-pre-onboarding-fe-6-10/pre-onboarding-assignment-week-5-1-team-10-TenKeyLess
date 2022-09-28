import * as React from 'react';

type colorType = {
  primary: string;
  // primaryLight: string;
  // primaryDark: string;

  secondary: string;
  // secondaryLight: string;
  // secondaryDark: string;

  textMain: string;
  textSub: string;
  textDisabled: string;
  textHighlighted: string;

  background: string;
  subBackground: string;

  warning: string;
  error: string;
};

type fontSizeType = {
  small: string;
};

type spaceType = {
  sm: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    // theme: 'light' | 'dark';
    breakpoints: string[];
    fontSizes: fontSizeType;
    space: spaceType;
    colors: colorType;
    radius: string[];
  }

  export interface ThemedStyledComponentsModule<T> {
    createGlobalStyle(
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): React.ComponentClass;
  }

  export function createGlobalStyle(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): React.ComponentClass;
}
