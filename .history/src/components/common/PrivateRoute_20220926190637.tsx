import * as React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';

const useAuth = () => {
    const checkLogin = lo
    return false;
};

const PrivateRoute = (props: any) => {
    const checkLogin = useAuth();
    return checkLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
