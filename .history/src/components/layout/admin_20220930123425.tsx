import SideBar from './Sidebar';
import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Statistical } from './statistical';
import MianRouter from 'routes/mainrouter';

export const AdminLayout = () => {
    return (
        <div className={styles.container}>
            <SideBar />
            {/* <SideBar /> */}
            {/* <Outlet> */}
            {/* <Statistical /> */}
            {/* </Outlet> */}
            {/* <MianRouter /> */}
            <div className={'warpper'}>
                <div className={'App__Content'}>
                <Routes>
                <Route path="/" element={<InnerContent />}>
                    {/* <Route path="/admin" element={<Navigate replace to="/admin/statistical" />} /> */}
                    <Route path="/admin/statistical" element={<Statistical />} />
                    <Route path="/admin/catalogManager" element={<CatalogManager />} />
                    <Route path="/admin/customerManager" element={<CustomerManager />} />
                    <Route path="/admin/emloyeeManager" element={<EmloyeeManager />} />
                    <Route path="/admin/inventoryManagement" element={<InventoryManagement />} />
                    <Route path="/admin/manageOrders" element={<ManageOrders />} />
                    <Route path="/admin/productManager" element={<ProductManager />} />
                </Route>
            </Routes>
                </div>
            </div>
        </div>
    );
};
