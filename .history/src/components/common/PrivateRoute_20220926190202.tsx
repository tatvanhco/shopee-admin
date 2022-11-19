import * as React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';

const useAuth = () => {
    return true
}

const PrivateRoute = (props: any) =>{
    const checkLogin = useAuth()
    return checkLogin ? <Outlet/> : <Navigate ;
}

export default PrivateRoute;
