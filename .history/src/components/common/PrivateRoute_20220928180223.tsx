import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = (props: PrivateRouteProps) => {
    const IsLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!IsLoggedIn) return <Navigate to={'/login'} />;
    return <R;
};
