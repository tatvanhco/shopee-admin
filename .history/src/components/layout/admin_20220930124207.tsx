import SideBar from './Sidebar';
import styles from './layout.module.scss';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Statistical } from './statistical';
import MianRouter from 'routes/mainrouter';
import { InnerContent } from './Innercontext';
import { CatalogManager } from './catalogManager';
import { CustomerManager } from './customerManager';
import { EmloyeeManager } from './emloyeeManager';
import { InventoryManagement } from './inventoryManagement';
import { ManageOrders } from './ManageOrders';
import { ProductManager } from './productManager';

export const AdminLayout = () => {
    return (s
        <div className={styles.container}>
            <SideBar />

            <div className={'warpper'}>
                <div className={'App__Content'}>
                    <Routes>
                        <Route path="/" element={<InnerContent />}>
                            <Route path="/" element={<Navigate replace to="/admin/statistical" />} />
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
