import { Dashboard, ProductManager } from 'components/layout';
import { Statistical } from '../components/layout/statistical';
type route = {
    path: string;
    element: any;
};
export const Router: any = [
    {
        path: '/admin/statistical',
        element: Statistical,
    },
];
