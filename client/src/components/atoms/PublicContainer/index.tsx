import React from 'react';
import * as UI from './style';

interface Props {
  children: JSX.Element;
}

const PublicContainer = ({ children }: Props) => {
  return <UI.Container>{children}</UI.Container>;
};

export default PublicContainer;
