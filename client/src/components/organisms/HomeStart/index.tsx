import React from 'react';
import { Button } from '@components/index';
import { USER_LOGIN, USER_REGISTER } from '@constants/string';
import * as UI from './style';

const HomeStart = () => {
  return (
    <UI.Container>
      <UI.ButtonGroup styletype="secondary" size="large" block>
        {USER_LOGIN}
      </UI.ButtonGroup>
      <UI.ButtonGroup styletype="info" size="large" block>
        {USER_REGISTER}
      </UI.ButtonGroup>
    </UI.Container>
  );
};

export default HomeStart;
