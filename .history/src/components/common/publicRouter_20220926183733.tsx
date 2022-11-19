import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export interface PublicRouteProps {}

export function PublicRoute(props: RouteProps) {
    
    return <Route {...props} />;
}
