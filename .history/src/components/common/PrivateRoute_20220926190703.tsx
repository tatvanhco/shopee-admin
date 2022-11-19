import * as React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';

const useAuth = () => {
    const checkLogin = localStorage.getItem('user')
    if (checkLogin) {
        return 
    }
    return false;
};

const PrivateRoute = (props: any) => {
    const checkLogin = useAuth();
    return checkLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
