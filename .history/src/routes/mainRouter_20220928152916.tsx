import { PublicRoute } from 'components/common';
import PrivateRoute from 'components/common/PrivateRoute';
import {
    CatalogManager,
    CustomerManager,
    Dashboard,
    EmloyeeManager,
    InnerContent,
    InventoryManagement,
    ManageOrders,
    ProductManager,
} from 'components/layout';
import LoginPage from 'features/auth/pages/loginPage';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const MainRouter = () => (
    <Routes>
        <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<InnerContent />}>
                <Route path="/admin/" element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="productManager" element={<ProductManager />} />
                <Route path="customerManager" element={<CustomerManager />} />
                <Route path="emloyeeManager" element={<EmloyeeManager />} />
                <Route path="catalogManager" element={<CatalogManager />} />
                <Route path="manageOrders" element={<ManageOrders />} />
                <Route path="inventoryManagement" element={<InventoryManagement />} />
            </Route>
        </Route>
        <Route path="login" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />}></Route>
        </Route>
    </Routes>
);

export default MainRouter;