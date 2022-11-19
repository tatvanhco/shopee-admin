const NavRouter = {
    sidebar: [
        {
            name: 'Thống kê',
            to: '/admin/statistical', 
            text: 'dashboard'

        }
    ],
    footer: [],
}
    {
        path: '/admin/statistical',
        element: Statistical,
    },
];

export default NavRouter;
