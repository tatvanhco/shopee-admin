import * as React from 'react';
import SideBar from './Sidebar';
import styles from './layout.module.scss';
import Mainrouter from 'routes/mainrouter';
import { Route, Routes } from 'react-router-dom';
import {
    CatalogManager,
    CustomerManager,
    EmloyeeManager,
    InventoryManagement,
    ManageOrders,
    ProductManager,
    Statistical,
} from 'components/layout';
import mainrouter from 'routes/mainrouter';

export const AdminLayout = () => {
    return (
        <div className={'container'}>
            <SideBar />
            <div className={'warpper'}>
                <div className={'App__Content'}>
                    {mainrouter}
                    {/* <Routes>
                        <Route path="/admin/statistical" element={<Statistical />} />
                        <Route path="/admin/catalogManager" element={<CatalogManager />} />
                        <Route path="/admin/customerManager" element={<CustomerManager />} />
                        <Route path="/admin/emloyeeManager" element={<EmloyeeManager />} />
                        <Route path="/admin/inventoryManagement" element={<InventoryManagement />} />
                        <Route path="/admin/manageOrders" element={<ManageOrders />} />
                        <Route path="/admin/productManager" element={<ProductManager />} />
                    </Routes> */}
                </div>
            </div>
        </div>
    );
};
