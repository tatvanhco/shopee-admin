import { PrivateRoute } from 'components/common';
import Dashboard from 'components/layout/dashboard';
import InnerContent from 'components/layout/Innercontext';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainRouter = () => (
    <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<InnerContent />}>
                <Route path="/" element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Route>
        <Route
    </Routes>
);

export default MainRouter;
