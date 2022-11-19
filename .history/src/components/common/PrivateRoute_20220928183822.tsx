import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
    const IsLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!IsLoggedIn) {
        return <Navigate to={'/login'} />;
    } else {
        return <Route />;
    }
};
