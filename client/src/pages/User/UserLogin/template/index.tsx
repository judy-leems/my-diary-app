import React from 'react';
import { STRING } from '@constants/string';
import { PageHeader, PublicContainer } from '@components/index';
import * as UI from './style';

const UserLoginTemplate = () => {
  return (
    <PublicContainer>
      <PageHeader>{STRING.USER_LOGIN}</PageHeader>
    </PublicContainer>
  );
};

export default UserLoginTemplate;
