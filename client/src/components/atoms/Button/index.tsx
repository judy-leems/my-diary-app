import React from 'react';
import * as UI from './style';

interface Props {
  children: React.ReactElement | string;
  styletype?: string;
  size?: string;
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({
  styletype = 'default',
  size = 'default',
  to,
  children,
  onClick,
}: Props) => {
  if (to) {
    return (
      <UI.ButtonLink
        to={to}
        styletype={styletype}
        size={size}
        onClick={onClick}
      >
        {children}
      </UI.ButtonLink>
    );
  }
  return (
    <UI.Button styletype={styletype} size={size} onClick={onClick}>
      {children}
    </UI.Button>
  );
};

export default Button;
