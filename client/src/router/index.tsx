import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalLayout from '@src/components/organisms/GlobalLayout';
import Home from '@pages/Home';
import { URL } from '@constants/url';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path={URL.HOME} element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
