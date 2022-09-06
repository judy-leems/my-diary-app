import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { URL } from '@constants/url';
import { PublicLayout, PrivateLayout } from '@components/index';
import Home from '@pages/Home';
import UserLogin from '@pages/User/UserLogin';
import UserRegister from '@pages/User/UserRegister';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={URL.HOME} element={<Home />}></Route>
          <Route path={URL.LOGIN} element={<UserLogin />}></Route>
          <Route path={URL.REGISTER} element={<UserRegister />}></Route>
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path={URL.HOME} element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
