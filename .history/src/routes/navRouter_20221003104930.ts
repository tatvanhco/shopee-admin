const NavRouter = {
    sidebar: [
        
        {
            name: 'Thống kê',
            to: '/admin/statistical',
            text: 'statistical',
        },
        {
            name: 'Quản lý nhân viên',
            to: '/admin/emloyeeManager',
            text: 'emloyeeManager',
        },
        {
            name: 'Quản lý khách hàng',
            to: '/admin/customerManager',
            text: 'customerManager',
        },
        {
            name: 'Quản lý sản phẩm',
            to: '/admin/productManager',
            text: 'productManager',
        },
        {
            name: 'Quản lý danh mục',
            to: '/admin/catalogManager',
            text: 'catalogManager',
        },
        {
            name: 'Quản lý đơn hàng',
            to: '/admin/manageOrders',
            text: 'manageOrders',
        },
        {
            name: 'Quản lý kho',
            to: '/admin/inventoryManagement',
            text: 'inventoryManagement',
        },
    ],
};

export default NavRouter;
