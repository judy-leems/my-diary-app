import React from 'react';
import { HomeContainer, HomeMessage, Button } from '@components/index';
import { USER_LOGIN } from '@constants/string';

const Home = () => {
  return (
    <HomeContainer>
      <HomeMessage />
      <Button styletype="primary" size="large" block>
        {USER_LOGIN}
      </Button>
    </HomeContainer>
  );
};

export default Home;
