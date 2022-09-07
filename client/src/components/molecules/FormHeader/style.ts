import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Legend = styled.legend`
  font-size: ${(props) => props.theme.fontSize.subTitle};
  color: ${(props) => props.theme.colors.black};
`;
