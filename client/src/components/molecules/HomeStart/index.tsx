import React from 'react';
import { Button } from '@components/index';
import { STRING } from '@constants/string';
import { URL } from '@constants/url';
import * as UI from './style';

const HomeStart = () => {
  return (
    <UI.Container>
      <UI.ButtonGroup
        to={URL.USER_LOGIN}
        styletype="secondary"
        size="large"
        block
      >
        {STRING.USER_LOGIN}
      </UI.ButtonGroup>
      <UI.ButtonGroup
        to={URL.USER_REGISTER}
        styletype="info"
        size="large"
        block
      >
        {STRING.USER_REGISTER}
      </UI.ButtonGroup>
    </UI.Container>
  );
};

export default HomeStart;
