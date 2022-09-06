import React from 'react';
import { Button } from '@components/index';
import { TITLE } from '@constants/string';
import { URL } from '@constants/url';
import * as UI from './style';

const HomeStart = () => {
  return (
    <UI.Container>
      <UI.ButtonGroup to={URL.LOGIN} styletype="secondary" size="large" block>
        {TITLE.LOGIN}
      </UI.ButtonGroup>
      <UI.ButtonGroup to={URL.REGISTER} styletype="info" size="large" block>
        {TITLE.REGISTER}
      </UI.ButtonGroup>
    </UI.Container>
  );
};

export default HomeStart;
