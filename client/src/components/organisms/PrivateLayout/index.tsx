import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppContainer } from '@components/index';

const HomeLayout = () => {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
};

export default HomeLayout;
