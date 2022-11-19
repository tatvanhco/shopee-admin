import { PrivateRoute } from 'components/common';
import { CustomerManager, Dashboard, InnerContent, ProductManager } from 'components/layout';
import LoginPage from 'features/auth/pages/loginPage';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const MainRouter = () => (
    <Routes>
        {/* <Route path="/" element={<PrivateRoute />}> */}
        <Route path="/" element={<InnerContent />}>
            <Route path="/" element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="productManager" element={<ProductManager />} />
            <Route path="CustomerManager" element={<CustomerManager/>} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Route>
        {/* </Route> */}
        <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
);

export default MainRouter;
