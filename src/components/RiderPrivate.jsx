import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const Private = () => {
  
  const token =  localStorage.getItem('ridertoken')

  console.log(token)
  return (
  <>
    {!token ? <Navigate to="/riderlogin" /> : <Outlet />}
  </>
  );
};

export default Private;