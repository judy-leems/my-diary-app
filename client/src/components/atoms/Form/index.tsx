import React from 'react';
import * as UI from './style';

interface Props {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, onSubmit }: Props) => {
  return (
    <UI.Form onSubmit={onSubmit}>
      <UI.Fieldset>{children}</UI.Fieldset>
    </UI.Form>
  );
};

export default Form;
