import styled from 'styled-components';
import { Button } from '@components/index';

export const Container = styled.div`
  position: relative;
  text-align: center;
  width: 20rem;
`;

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 6rem;
  color: ${(props) => props.theme.colors.title};
`;

export const ButtonGroup = styled(Button)`
  margin: 10px 0;
`;
