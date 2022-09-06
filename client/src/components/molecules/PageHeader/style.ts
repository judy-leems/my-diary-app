import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: left;
  margin-bottom: 2rem;
`;

export const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.title};
  color: ${(props) => props.theme.colors.title};
`;
