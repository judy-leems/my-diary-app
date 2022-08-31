import React from 'react';
import { Logo } from '@constants/string';
import * as UI from './style';

const HomeMessage = () => {
  return (
    <UI.Container>
      <UI.Logo>🤫</UI.Logo>
      <UI.Logo>{Logo}</UI.Logo>
      <UI.Description>나만의 다이어리</UI.Description>
    </UI.Container>
  );
};

export default HomeMessage;
