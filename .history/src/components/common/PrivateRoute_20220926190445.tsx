import * as React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';

const useAuth = () => {
    return f;
};

const PrivateRoute = (props: any) => {
    const checkLogin = useAuth();
    return checkLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
