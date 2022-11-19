import React from 'react';
import { PrivateRoute, PublicRoute } from 'components/common';
import { AdminLayout, InnerContent, Statistical } from 'components/layout';
import LoginPage from 'features/auth/loginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavRouter } from './navRouter';

const MianRouter = () => (
    <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<InnerContent />}>
                <Route path="/" element={<Navigate replace to="admin" />} />
                <Route path="admin" element={<AdminLayout />}>
                    {NavRouter.map((route: any, index: any): vou => {
                        <Route key={index} path={route.path} element={<route.element />} />
                    })}
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
