import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) return <Navigate to="login" re/>;
    return <Route {...props} />;
}
