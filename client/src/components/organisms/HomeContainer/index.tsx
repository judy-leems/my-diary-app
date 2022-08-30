import React from 'react';
import * as UI from './style';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const HomeContainer = ({ children }: Props) => {
  return <UI.Container>{children}</UI.Container>;
};

export default HomeContainer;
