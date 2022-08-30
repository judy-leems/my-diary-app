import React from 'react';
import { HomeMessage, Button } from '@components/index';
import { USER_LOGIN } from '@constants/string';

const Home = () => {
  return (
    <div>
      <HomeMessage />
      <Button styletype="primary">{USER_LOGIN}</Button>
      <Button>{USER_LOGIN}</Button>
    </div>
  );
};

export default Home;
