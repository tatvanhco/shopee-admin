import * as React from 'react';
import { Navigate, Outlet, Route, RouterProps } from 'react-router-dom';

// const useAuth = () => {
//     const checkLogin = localStorage.getItem('user');
//     if (checkLogin) {
//         return true;
//     } else {
//         return false;
//     }
// };

const PrivateRoute = (props: RouterProps) => {
    // const checkLogin = useAuth();
    const isLo
    return <Route {...props}/>;
};

export default PrivateRoute;
