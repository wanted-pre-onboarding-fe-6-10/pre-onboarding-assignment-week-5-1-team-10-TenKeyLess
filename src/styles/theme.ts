import { DefaultTheme } from 'styled-components';
import { colorType } from '../types/styled';

const colors: colorType = {
  primary: '#007BE9',
  // primaryLight: '',
  // primaryDark: '',
  secondary: '#A7AFB7',
  // secondaryLight: '',
  // secondaryDark: '',
  textMain: '#000000',
  textSub: '#475763',
  textDisabled: '#A7AFB7',
  textHighlighted: '#007BE9',
  background: '#CAE9FF',
  subBackground: '#FFFFFF',
  warning: '#f0b95b',
  error: '#ff6759',
};

const breakpoints = ['31.25em', '43.75em', '46.875em'];
// const fontSizes = [
//   '1.2rem',
//   '1.4rem',
//   '1.6rem',
//   '1.8rem',
//   '2.4rem',
//   '2.8rem',
//   '3.2rem',
//   '4.0rem',
//   '4.8rem',
//   '6.4rem',
// ];

const fontSizes = {
  small: '1.2rem',
};

const space = {
  sm: '.4rem',
};
// const space = [
//   '0',
//   '.4rem',
//   '.8rem',
//   '1.2rem',
//   '1.6rem',
//   '2.0rem',
//   '3.2rem',
//   '4.8rem',
//   '6.4rem',
//   '9.6rem',
// ];

const radius = ['1rem'];

const defaultTheme: DefaultTheme = {
  breakpoints,
  fontSizes,
  space,
  colors,
  radius,
};

export { defaultTheme };
