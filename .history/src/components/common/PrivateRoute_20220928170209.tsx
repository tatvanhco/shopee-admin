import * as React from 'react';
import { Navigate, Outlet, Route, RouterProps } from 'react-router-dom';

const useAuth = () => {
    const checkLogin = localStorage.getItem('user');
    if (checkLogin) {
        return true;
    } else {
        return false;
    }
};

export const PrivateRoute = (props: any) => {
    const checkLogin = useAuth();
    return checkLogin ? <Navigate to="/dashboard" /> : <Outlet />;
};
