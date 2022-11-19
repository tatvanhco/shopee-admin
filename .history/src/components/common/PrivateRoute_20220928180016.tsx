import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = (props: any) => {
    const IsLoggedIn = Boolean(localStorage.get)
    // return checkLogin ? <Outlet /> : <Navigate to="/dashboard" />;
};
