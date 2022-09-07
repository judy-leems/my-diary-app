import React from 'react';
import * as UI from './style';

interface Props {
  title?: React.ReactNode | string;
  children?: React.ReactNode | string;
}

const FormHeader = ({ title, children }: Props) => {
  return (
    <UI.Container>
      <UI.Legend>{title}</UI.Legend>
      {children}
    </UI.Container>
  );
};

export default FormHeader;
