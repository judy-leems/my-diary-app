import React from 'react';
import * as UI from './style';

interface Props {
  children: React.ReactNode | string;
}

const AppContainer = ({ children }: Props) => {
  return <UI.AppContainer>{children}</UI.AppContainer>;
};

export default AppContainer;
