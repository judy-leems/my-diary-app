import React from 'react';
import * as UI from './style';

interface Props {
  id?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
  name?: string;
  value?: string;
  readOnly?: boolean | undefined;
  disable?: boolean | undefined;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputText = ({
  id,
  type = 'text',
  placeholder = '',
  autoComplete = 'off',
  maxLength,
  name,
  value,
  readOnly = false,
  onChange,
  className,
}: Props) => {
  return (
    <UI.Container>
      <UI.Input
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
        value={value}
        maxLength={maxLength}
        readOnly={readOnly}
        className={className}
      />
    </UI.Container>
  );
};

export default InputText;
