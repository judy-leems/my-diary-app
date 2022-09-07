import { DefaultTheme } from 'styled-components';

const fontSize = {
  global: '62.5%',
  title: '2.4rem',
  subTitle: '2rem',
  text: '1.6rem',
  tip: '1rem',
};

const colors = {
  primary: '#54e346',
  secondary: '#0e49b5',
  title: '#121212',
  subTitle: '#313131',
  text: '#525252',
  line: '#d3d6db',
  white: '#fff',
  black: '#000',
  transparent: 'transparent',
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
