import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute = (props: RouteProps) => {
    const IsLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!IsLoggedIn) {
        return <Navigate to={'/login'} />;
    } else {
        return <Route {...props} />;
    }
};
