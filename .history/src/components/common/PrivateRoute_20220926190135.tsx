import * as React from 'react';
import { Navigate, Route } from 'react-router-dom';

const useAuth = () => {
    return true
}

const PrivateRoute = (props: any) =>{
    const checkLogin = useAuth()
    return ;
}

export default PrivateRoute;
