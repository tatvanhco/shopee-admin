import SideBar from './Sidebar';

export const AdminLayout = () => {
    return (
        // <Router location={'/'} navigator={true}>
        //     <NavLink to={'/'}>
        //         <Link to={''} />
        //     </NavLink>

        //     <div className={'warpper'}>
        //         <div className={'App__Content'}>
        //             <Routes>
        //                 <Route path="/" element={<InnerContent />}>
        //                     <Route path="/" element={<Navigate replace to="/admin/statistical" />} />
        //                     <Route path="/admin/statistical" element={<Statistical />} />
        //                     <Route path="/admin/catalogManager" element={<CatalogManager />} />
        //                     <Route path="/admin/customerManager" element={<CustomerManager />} />
        //                     <Route path="/admin/emloyeeManager" element={<EmloyeeManager />} />
        //                     <Route path="/admin/inventoryManagement" element={<InventoryManagement />} />
        //                     <Route path="/admin/manageOrders" element={<ManageOrders />} />
        //                     <Route path="/admin/productManager" element={<ProductManager />} />
        //                 </Route>
        //             </Routes>
        //         </div>
        //     </div>
        // </Router>
        // <>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link to="/admin/statistical">Thống kê</Link>
        //             </li>
        //             <li>
        //                 <Link to="/admin/productManager">Quản lý sản phẩm</Link>
        //             </li>
        //         </ul>
        //     </nav>
        //     <Routes>
        //         <Route path="/admin/statistical" element={<Statistical />} />
        //         <Route path="/admin/productManager" element={<ProductManager />} />
        //     </Routes>
        // </>
        <SideBar />

    );
};
