import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
    const useAuth = () => {
        const user = localStorage.getItem('user');
        if (user) {
            return true;
        } else {
            return false;
        }
    };

    const ProtectedRoutes = (props: any) => {
        const auth = useAuth();

        return auth ? <Outlet /> : <Navigate to="/login" />;
    };
};
