import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../../reactPro/app1/src/components/Navbar.jsx';

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
