import * as React from 'react';
import { Navigate, Route } from 'react-router-dom';

export interface PrivateRouteProps {}

export function PrivateRoute(props: PrivateRouteProps) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) return <Navigate to="/login" />;
    return <Route />;
}
