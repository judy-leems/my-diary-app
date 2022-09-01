import React from 'react';
import * as UI from './style';

interface Props {
  children: JSX.Element;
}

const PrivateContainer = ({ children }: Props) => {
  return <UI.Container>PrivateContainer</UI.Container>;
};

export default PrivateContainer;
