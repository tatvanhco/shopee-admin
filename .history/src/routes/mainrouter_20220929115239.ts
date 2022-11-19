import { useRoutes } from 'react-router-dom';
import { Dashboard, ProductManager } from 'components/layout';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { Statistical } from '../components/layout/statistical';
import { ReactElement } from 'react';
type route = {
    path: string;
    element: any;
};
export const publicRouter: () => route[] = () => [
    {
        path: '/admin/statistical',
        element: Statistical,
    },
];
