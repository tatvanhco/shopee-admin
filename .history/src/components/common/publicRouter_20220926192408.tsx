import * as React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';

const useAuth = () => {
    const checkLogin = localStorage.getItem('user');
    if (checkLogin) {
        return true;
    } else {
        return false;
    }
};

export function PublicRoute(props: any) {
    const checkLogin = useAuth();
    return checkLogin ?  : <Navigate to="/dashboard" />;
}
