import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

const checkLogin = () => {
    const checkLogin = localStorage.getItem('user');
    if (checkLogin) {

    }

};

export default function PublicRoute(props: RouteProps) {
    return;
}
