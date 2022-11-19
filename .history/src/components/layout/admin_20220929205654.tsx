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
// import mainrouter from 'routes/mainrouter';

export const AdminLayout = () => {
    return (
        <div className={'container'}>
            <SideBar />

            {Mainrouter}
            <div className={'warpper'}>
                <div className={'App__Content'}>
                    <Statistical />
                    <Routes>
                        <Route path="/statistical" element={<Statistical />} />
                        <Route path="/catalogManager" element={<CatalogManager />} />
                        <Route path="/customerManager" element={<CustomerManager />} />
                        <Route path="/emloyeeManager" element={<EmloyeeManager />} />
                        <Route path="/inventoryManagement" element={<InventoryManagement />} />
                        <Route path="/manageOrders" element={<ManageOrders />} />
                        <Route path="/productManager" element={<ProductManager />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};
