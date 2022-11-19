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

export const publicRoute = [
    { path: '/', component: Dashboard },
    { path: '/manageOrders', component: ManageOrders },
    { path: '/productManager', component: ProductManager },
    { path: '/statistical', component: Statistical },
    { path: '/customerManager', component: CustomerManager },
];

// const PrivateRoute = [];

 publicRoute;
