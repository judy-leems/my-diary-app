import { DefaultTheme } from 'styled-components';

const fontSize = {
  title: '20px',
  subTitle: '16px',
  text: '14px',
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
