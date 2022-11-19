import * as React from 'react';
import { Navigate, Route } from 'react-router-dom';

const useAuth = () => {
    const checkLogin = localStorage.getItem('user');
    if (checkLogin) {
        return true;
    } else {
        return false;
    }
};

export default function PublicRoute(props: any) {
    const checkLogin = useAuth();
    return checkLogin ? 
}
