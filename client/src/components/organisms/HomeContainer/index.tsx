import React from 'react';
import { HomeMessage, HomeStart } from '@components/index';
import * as UI from './style';

const HomeContainer = () => {
  return (
    <UI.Container>
      <HomeMessage />
      <HomeStart />
    </UI.Container>
  );
};

export default HomeContainer;
