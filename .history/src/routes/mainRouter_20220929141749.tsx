import React from 'react';
import { PrivateRoute, PublicRoute } from 'components/common';
import { AdminLayout, CatalogManager, CustomerManager, InnerContent, Statistical } from 'components/layout';
import LoginPage from 'features/auth/loginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavRouter } from './navRouter';
import { EmitHint } from 'typescript';

const MianRouter = () => (
    <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<InnerContent />}>
                <Route path="/" element={<Navigate replace to="admin" />} />
                <Route path="admin" element={<AdminLayout />}>
                    {/* {NavRouter.map((route: any, index: any): any => {
                        <Route key={index} path={route.path} element={<route.element />} />;
                    })} */}
                    <Route path="/admin/statistical" element={<Statistical />} />
                    <Route path="/admin/catalogManager" element={<CatalogManager />} />
                    <Route path="/admin/customerManager" element={<CustomerManager />} />
                    <Route path="/admin/statistical" element={<E />} />
                    <Route path="/admin/statistical" element={<Statistical />} />
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