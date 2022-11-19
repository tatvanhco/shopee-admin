import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

const useAuth = () => {
    
}

export function PrivateRoute(props: RouteProps) {
    const checkLogin = useAuth()
    return <Route {...props} />;
}
