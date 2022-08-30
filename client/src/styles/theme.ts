import { DefaultTheme } from 'styled-components';

const fontSize = {
  global: '62.5%',
  title: '2.4rem',
  subTitle: '2rem',
  text: '1.6rem',
};

const colors = {
  primary: '',
  font: '',
  white: '#fff',
  black: '#000',
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
