import React from 'react';
import * as UI from './style';

interface Props {
  children: React.ReactElement | string;
  className?: string;
}

const Typography = ({ children, className }: Props) => {
  return <UI.Container className={className}>{children}</UI.Container>;
};

export default Typography;
