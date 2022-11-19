import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = (props: any) => {
    const IsLoggedIn = Boolean(localStorage.getItem('access_to'))
    // return checkLogin ? <Outlet /> : <Navigate to="/dashboard" />;
};
