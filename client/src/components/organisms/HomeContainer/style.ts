import styled from 'styled-components';
import Typography from '@components/atoms/Typography';

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Header = styled.div`
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 6rem;
  color: ${(props) => props.theme.colors.title};
`;

export const Description = styled(Typography)`
  font-size: 30px;
  padding: 20px;
  color: red;
`;
