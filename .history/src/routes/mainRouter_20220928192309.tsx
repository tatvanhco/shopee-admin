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

const PublicRoute = () => [
    { path: '/', component: Dashboard },
    { path: '/manageOrders', component: ManageOrders },
    { path: '/productManager', component: ProductManager },
    { path: '/', component: Dashboard },
    { path: '/', component: Dashboard },
];

const PrivateRoute = () => [];

export { PrivateRoute, PrivateRoute };
