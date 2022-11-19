import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export interface PublicRouteProps {}

export function PublicRoute(props: RouteProps) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) return <Navigate to="login" />;
    return <Route {...props} />;
}
