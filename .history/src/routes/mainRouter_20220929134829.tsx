import React from 'react';
import { PrivateRoute, PublicRoute } from 'components/common';
import { AdminLayout, InnerContent, Statistical } from 'components/layout';
import LoginPage from 'features/auth/loginPage';
import { Navigate, Route, Routes } from 'react-router-dom';

const MianRouter = () => (
    <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<InnerContent />}>
                <Route path="/" element={<Navigate replace to="admin" />} />
                <Route path="admin" element={<AdminLayout />}>
                /* {navRouter.props.map((route: any, index: number) => {
                        const Pages = route.element;
                        <Route key={index} path={route.path} element={<Pages />} />;
                    })} */
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
