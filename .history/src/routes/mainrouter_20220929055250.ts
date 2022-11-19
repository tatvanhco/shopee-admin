import { useRoutes } from 'react-router-dom';
import { Dashboard } from 'components/layout';

export const publicRouter = () => {
    let elements = useRoutes([
        { path: '/admin/Statistical', element: <Statistical />},
        {path: '/admin/Statistical', element: <Statistical />}
    ]);
};
