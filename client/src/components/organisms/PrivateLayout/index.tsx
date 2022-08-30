import React from 'react';
import { Outlet } from 'react-router-dom';
import AppContainer from '@components/atoms/AppContainer';

const HomeLayout = () => {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
};

export default HomeLayout;
