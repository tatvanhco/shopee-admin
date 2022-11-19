import { useRoutes } from 'react-router-dom';
im

export const publicRouter = () => {
    let elements = useRoutes([{ path: '/', element: <Dashboard /> }]);
};
