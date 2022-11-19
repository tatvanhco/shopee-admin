import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { NotFound, PrivateRoute, PublicRoute } from 'components/common';
import LoginPage from 'features/auth/loginPage';


const MianRouter = () => (
    // <div className="sbdksf"></div>
    <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<InnerContent />}>
                <Route path="/" element={<Navigate replace to="admin" />} />
                <Route path="admin" element={<Statistical />}>
                    
                </Route>
            </Route>
        </Route>
        <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default MianRouter;
