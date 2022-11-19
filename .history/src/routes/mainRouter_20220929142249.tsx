import React from 'react';
import { PrivateRoute, PublicRoute } from 'components/common';
import {
    AdminLayout,
    CatalogManager,
    CustomerManager,
    EmloyeeManager,
    InnerContent,
    InventoryManagement,
    ManageOrders,
    ProductManager,
    Statistical,
} from 'components/layout';
import LoginPage from 'features/auth/loginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from '../components/layout/layout.module.scss';

const MianRouter = () => (
    <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<InnerContent />}>
                <Route path="/" element={<Navigate replace to="admin" />} />
                <Route path="admin" element={<AdminLayout />}>
                    <div className={styles.warpper}>
                        <div className={styles.App__Content}></div>
                    </div>
                    <Route path="/admin/statistical" element={<Statistical />} />
                    <Route path="/admin/catalogManager" element={<CatalogManager />} />
                    <Route path="/admin/customerManager" element={<CustomerManager />} />
                    <Route path="/admin/emloyeeManager" element={<EmloyeeManager />} />
                    <Route path="/admin/inventoryManagement" element={<InventoryManagement />} />
                    <Route path="/admin/manageOrders" element={<ManageOrders />} />
                    <Route path="/admin/productManager" element={<ProductManager />} />
                </Route>
            </Route>
        </Route>
        <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<Navigate to={'/login'} />} />
    </Routes>
);

export default MianRouter();
