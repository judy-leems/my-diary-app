import styled from 'styled-components';

export const Label = styled.label`
  font-size: ${(props) => props.theme.fontSize.text};
  color: ${(props) => props.theme.colors.black};
  flex-shrink: 0;
`;
