import React from 'react';
import * as UI from './style';

interface Props {
  htmlFor?: string;
  className?: string;
  labelTitle: React.ReactNode | string;
}
const Label = ({ htmlFor, className, labelTitle }: Props) => {
  return (
    <UI.Label htmlFor={htmlFor} className={className}>
      {labelTitle}
    </UI.Label>
  );
};

export default Label;
