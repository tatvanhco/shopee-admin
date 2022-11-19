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
import * as React from 'react';

import { useRoutes } from 'react-router-dom';

export publicRoute() {
    let elements = useRoutes([
        { path: '/', component: Dashboard },
        { path: '/manageOrders', component: ManageOrders },
        { path: '/productManager', component: ProductManager },
        { path: '/statistical', component: Statistical },
        { path: '/customerManager', component: CustomerManager },
    ])
    return elements;
};