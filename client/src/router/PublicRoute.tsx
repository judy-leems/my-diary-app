import React from 'react';
import { Route } from 'react-router-dom';
import isLogin from '../utils/isLogin';

interface Props {
  component: any;
  restricted: any;
}

const PublicRoute = ({ component: Component, restricted, ...rest }: Props) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      element={
        isLogin() && restricted ? <Route path="/dashboard" /> : <Component />
      }
    />
  );
};

export default PublicRoute;
