import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppContainer } from '@components/index';

const PublicLayout = () => {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
};

export default PublicLayout;
