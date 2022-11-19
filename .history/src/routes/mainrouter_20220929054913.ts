import { useRoutes } from 'react-router-dom';
import {}

export const publicRouter = () => {
    let elements = useRoutes([{ path: '/', element: <Dashboard /> }]);
};
