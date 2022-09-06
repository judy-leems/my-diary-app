import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  styletype: string;
  size: string;
  block: boolean;
}

const ButtonStyle = css<Props>`
  display: ${(props: Props) => (props.block ? 'block' : 'inline-block')};
  width: ${(props: Props) => (props.block ? '100%' : 'auto')};
  line-height: 1;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  font-weight: 700;
  box-sizing: border-box;
  ${(props: Props) => {
    switch (props.styletype) {
      case 'primary':
        return css`
          border-color: ${(props) => props.theme.colors.primary};
          background: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.white};
        `;
      case 'secondary':
        return css`
          border-color: ${(props) => props.theme.colors.secondary};
          background: ${(props) => props.theme.colors.secondary};
          color: ${(props) => props.theme.colors.white};
        `;
      case 'info':
        return css`
          border-color: ${(props) => props.theme.colors.line};
          background: ${(props) => props.theme.colors.white};
          color: ${(props) => props.theme.colors.text};
        `;
      default:
        return css`
          border-color: ${(props) => props.theme.colors.line};
          color: ${(props) => props.theme.colors.text};
        `;
    }
  }}
  ${(props: Props) => {
    switch (props.size) {
      case 'large':
        return css`
          padding: 1.6rem 2rem;
          border-radius: 1rme;
          font-size: ${(props) => props.theme.fontSize.text};
        `;
      default:
        return css`
          padding: 1.2rem 2rem;
        `;
    }
  }}
`;

export const Button = styled.button`
  ${ButtonStyle}
`;

export const ButtonLink = styled(Link)`
  ${ButtonStyle}
`;
