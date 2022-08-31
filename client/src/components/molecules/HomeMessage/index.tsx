import React from 'react';
import { STRING } from '@constants/string';
import * as UI from './style';

const HomeMessage = () => {
  return (
    <UI.Container>
      <UI.Logo>🤫</UI.Logo>
      <UI.Logo>{STRING.LOGO}</UI.Logo>
      <UI.Description>나만의 다이어리</UI.Description>
    </UI.Container>
  );
};

export default HomeMessage;
