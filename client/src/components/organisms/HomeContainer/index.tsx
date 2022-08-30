import React from 'react';
import { Logo } from '@constants/string';
import * as UI from './style';

const HomeLayout = () => {
  return (
    <UI.Container>
      <UI.Header>
        <UI.Logo>🤫</UI.Logo>
        <UI.Logo>{Logo}</UI.Logo>
        <UI.Description>나만의 다이어리</UI.Description>
      </UI.Header>
    </UI.Container>
  );
};

export default HomeLayout;
