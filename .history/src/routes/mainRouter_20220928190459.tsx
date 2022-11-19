import { PrivateRoute, PublicRoute } from 'components/common';
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
import LoginPage from 'features/auth/loginPage';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const MainRouter = () => (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/productManager" element={<ProductManager />} />
        <Route path="/customerManager" element={<CustomerManager />} />
        <Route path="/emloyeeManager" element={<EmloyeeManager />} />
        <Route path="/catalogManager" element={<CatalogManager />} />
        <Route path="/manageOrders" element={<ManageOrders />} />
        <Route path="/inventoryManagement" element={<InventoryManagement />} />
    </Routes>
);

export default MainRouter;
