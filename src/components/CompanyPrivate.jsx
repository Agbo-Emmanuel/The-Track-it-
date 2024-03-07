import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const Private = () => {
  
  const token =  localStorage.getItem('companytoken')

  console.log(token)
  return (
  <>
    {!token ? <Navigate to="/companylogin" /> : <Outlet />}
  </>
  );
};

export default Private;