import { PrivateRoute } from 'components/common';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => (
    <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route path='/' element={<In}></Route>
        </Route>
    </Routes>
);

export default MainRouter;
