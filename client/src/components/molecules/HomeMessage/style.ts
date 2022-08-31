import styled from 'styled-components';
import Typography from '@components/atoms/Typography';

export const Container = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
`;

export const Logo = styled.h1`
  line-height: 1.15;
  font-weight: 700;
  font-size: 6rem;
  color: ${(props) => props.theme.colors.title};
`;

export const Description = styled(Typography)`
  font-weight: 700;
  font-size: 4rem;
  color: ${(props) => props.theme.colors.primary};
`;
