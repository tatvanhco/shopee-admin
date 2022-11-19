import React from 'react';
import { PrivateRoute, PublicRoute } from 'components/common';
import { AdminLayout, InnerContent } from 'components/layout';
import LoginPage from 'features/auth/loginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import navRouter from './mainrouter';

const MianRouter = () => (
    <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<InnerContent />}>
                <Route path="/" element={<Navigate replace to="admin" />} />
                <Route path="admin" element={<AdminLayout />}>
                    {navRouter.map((route, index) => {
                        const Pages = route.elem
                        <Route path={i.path} element={<i.element />} />;
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
