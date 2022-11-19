import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

const useAuth = () => {
    return true
}

const PrivateRoute = (props: RouteProps) {
    const checkLogin = useAuth()
    return <Route {...props} />;
}
