import * as React from 'react';

export interface PrivateRouteProps {}

export function PrivateRoute(props: PrivateRouteProps) {

    const isLoggedIn = localStorage.getItem
    return <div>PrivateRoute</div>;
}
