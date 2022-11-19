import { Dashboard, ProductManager, Statistical } from 'components/layout';
import * as React from 'react';

interface NavRouterProps {
    path: string;
    element: any;
}

export const NavRouter = [
    {
        path: '/admin/statistical',
        element: Statistical,
    },
];
