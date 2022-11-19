import { useRoutes } from 'react-router-dom';
import { Dashboard } from 'components/layout';

export const publicRouter = () => {
    let elements = useRoutes([
        { path: '/', element: <Stati />},
        {}
    ]);
};
