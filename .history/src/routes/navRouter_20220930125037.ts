// const NavRouter = {
//     sidebar: [
//         {
//             name: 'Thống kê',
//             to: '/statistical',
//             text: 'Statistical',
//         },
//     ],
//     footer: [],
// };

import { AdminLayout } from 'components/layout';
import { useRoutes } from 'react-router-dom';

interface ty

// export default NavRouter;
const NavRouter = useRoutes([
    {
        path: '/',
        element: AdminLayout,
    },
]);

export default NavRouter;
