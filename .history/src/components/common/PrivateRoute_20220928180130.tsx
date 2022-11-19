import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = (props: PrivateRoute) => {
    const IsLoggedIn = Boolean(localStorage.getItem('access_token'))
    if(!IsLoggedIn) return <Navigate />
    // return checkLogin ? <Outlet /> : <Navigate to="/dashboard" />;
};
