import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

const checkLogin = () => {
    const checkLogin = localStorage.getItem('user');
    if (checkLogin) {
        return true
    } else {
        return false;
    }

};

export default function PublicRoute(props: any) {
    const checkLogin = checkLogin();
    return;
}
