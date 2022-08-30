import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  styletype: string;
  size: string;
}

const ButtonStyle = css<Props>`
  display: block;
  line-height: 1;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  font-weight: 700;
  ${(props: Props) => {
    switch (props.styletype) {
      case 'primary':
        return css`
          border-color: ${(props) => props.theme.colors.primary};
          background: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.white};
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
      case 'primary':
        return css`
          padding: 10px 20px;
        `;
      default:
        return css`
          padding: 10px 20px;
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
