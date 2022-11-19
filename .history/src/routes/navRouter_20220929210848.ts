const NavRouter = {
    sidebar: [
        {
            name: 'Thống kê',
            to: '/admin/statistical', 
            text: 'statistical'

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
