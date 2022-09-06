import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 50px;
  padding: 16px 20px;
  border: 1px solid ${(props) => props.theme.colors.line};
  &:focus {
    border-color: ${(props) => props.theme.colors.secondary};
  }
`;
