import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

const 

export function PrivateRoute(props: RouteProps) {
    const checkLogin = useAuth()
    return <Route {...props} />;
}
