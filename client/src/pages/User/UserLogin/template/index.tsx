import React from 'react';
import { STRING } from '@constants/string';
import { PageHeader } from '@components/index';
import * as UI from './style';

const UserLoginTemplate = () => {
  return (
    <UI.Container>
      <PageHeader>{STRING.USER_LOGIN}</PageHeader>
    </UI.Container>
  );
};

export default UserLoginTemplate;
