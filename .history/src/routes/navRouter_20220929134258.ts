import { Dashboard, ProductManager, Statistical } from 'components/layout';
import * as React from 'react';

export interface NavRouterProps {
    path: string;
    element: any;
}

export function NavRouter(props: NavRouterProps) {
    return [
        {
            path: '/admin/statistical',
            element: Statistical,
        },
    ];
}
