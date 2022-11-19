import * as React from 'react';
import { Redirect } from 'react-router-dom';

export interface PrivateRouteProps {}

export function PrivateRoute(props: PrivateRouteProps) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) return <Redirect to=''/>;
    return <div>PrivateRoute</div>;
}
