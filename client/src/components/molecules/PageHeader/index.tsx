import React from 'react';
import * as UI from './style';

interface Props {
  children: string;
}

const PageHeader = ({ children }: Props) => {
  return (
    <UI.Container>
      <UI.Heading>{children}</UI.Heading>
    </UI.Container>
  );
};

export default PageHeader;
