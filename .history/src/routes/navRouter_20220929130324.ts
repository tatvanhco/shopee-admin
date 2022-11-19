
import { Dashboard, ProductManager } from 'components/layout';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { Statistical } from '../components/layout/statistical';
type route = {
    path: string;
    element: any;
};
export const publicRouter: any = [
    {
        path: '/admin/statistical',
        element: Statistical,
    },
];
