import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicLayout from '@components/organisms/PublicLayout';
import PrivateLayout from '@components/organisms/PrivateLayout';
import Home from '@pages/Home';
import UserLogin from '@pages/User/UserLogin';
import UserRegister from '@pages/User/UserRegister';
import { URL } from '@constants/url';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={URL.HOME} element={<Home />}></Route>
          <Route path={URL.HOME} element={<UserLogin />}></Route>
          <Route path={URL.HOME} element={<UserRegister />}></Route>
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path={URL.HOME} element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
