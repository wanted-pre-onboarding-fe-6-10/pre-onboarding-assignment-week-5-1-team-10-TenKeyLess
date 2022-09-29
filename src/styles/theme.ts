import { DefaultTheme } from 'styled-components';
import { colorType } from '../types/styled';

const colors: colorType = {
  primary: '#007BE9',
  secondary: '#A7AFB7',
  textMain: '#000000',
  textSub: '#475763',
  textDisabled: '#A7AFB7',
  textHighlighted: '#007BE9',
  background: '#CAE9FF',
  subBackground: '#FFFFFF',
  hoveredBackground: '#F4F6FA',
  divider: '#A7AFB7',
  warning: '#f0b95b',
  error: '#ff6759',
};

const breakpoints = ['31.25em', '43.75em', '46.875em'];

const fontSizes = {
  small: '.8rem',
};

const space = {
  smaller: '.4rem',
  small: '.8rem',
  medium: '1.2rem',
  large: '1.6rem',
  larger: '2.0rem',
};

const radius = ['1rem', '2rem'];

const defaultTheme: DefaultTheme = {
  breakpoints,
  fontSizes,
  space,
  colors,
  radius,
};

export { defaultTheme };
