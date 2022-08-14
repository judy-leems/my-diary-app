import React from 'react';
import { Route } from 'react-router-dom';
import isLogin from '../utils/isLogin';

interface Props {
  component: any;
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      element={isLogin() ? <Component /> : <Route path="/signin" />}
    />
  );
};

export default PrivateRoute;
