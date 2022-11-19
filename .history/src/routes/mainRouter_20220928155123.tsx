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
            <Route path="/admin" element={<Navigate replace to="/admin/dashboard" />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/productManager" element={<ProductManager />} />
            <Route path="/admin/customerManager" element={<CustomerManager />} />
            <Route path="/admin/emloyeeManager" element={<EmloyeeManager />} />
            <Route path="/admin/catalogManager" element={<CatalogManager />} />
            <Route path="/admin/manageOrders" element={<ManageOrders />} />
            <Route path="/admin/inventoryManagement" element={<InventoryManagement />} />
        </Route>
    </Route>
    /* /* <Route path="login" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />}></Route>
        </Route> */     
    </Routes>
);

export default MainRouter;
