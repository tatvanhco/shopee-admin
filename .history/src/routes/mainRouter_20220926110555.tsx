import { PrivateRoute } from 'components/common';
import InnerContent from 'components/layout/Innercontext';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => (
    <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route path='/' element={<InnerContent/}></Route>
        </Route>
    </Routes>
);

export default MainRouter;
