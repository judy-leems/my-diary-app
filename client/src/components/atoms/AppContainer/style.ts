import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #fff;
  margin: 0 auto;
  max-width: 640px;
  font-size: ${(props) => props.theme.fontSize.text};
  color: ${(props) => props.theme.colors.text};
`;
