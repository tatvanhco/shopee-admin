import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import {
    Dashboard,
    catalogManagerProps,
    CustomerManager,
    EmloyeeManager,
    inventoryManagementProps,
    ManageOrders,
    ProductManager,
    Statistical,
} from 'components/layout';

export const publicRoute = () => {
    let elements = useRoutes([
        { path: '/', element: <Dashboard /> },
        { path: '/manageOrders', element: <ManageOrders /> },
        { path: '/productManager', element: <ProductManager /> },
        { path: '/statistical', element: <Statistical />},
        { path: '/customerManager', element:< CustomerManager },
    ]);
    return elements;
};
