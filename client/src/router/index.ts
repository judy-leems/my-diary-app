import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalLayout from './GlobalLayout';
import HalfLayout from './HalfLayout';
import Home from '../pages/Home';
import UsersLogin from '../pages/Users/UsersLogin';
import { URL } from '../constants/urls';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path={URL.HOME} element={<Home />}></Route>
        </Route>
        <Route element={<HalfLayout />}>
          <Route path={URL.USERS_LOGIN} element={<UsersLogin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
