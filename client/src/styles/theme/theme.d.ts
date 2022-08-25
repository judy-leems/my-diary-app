import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      default: string;
      white: string;
      black: string;
    };
    fontSize: {
      title: string;
      subTitle: string;
      text: string;
    };
  }
}
