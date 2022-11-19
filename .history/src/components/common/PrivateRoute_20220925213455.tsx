import * as React from 'react';

export interface PrivateRouteProps {}

export function PrivateRoute(props: PrivateRouteProps) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!)
    return <div>PrivateRoute</div>;
}
