import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound, PrivateRoute, PublicRoute } from 'components/common';
import { AdminLayout, InnerContent, Statistical } from 'components/layout';
import LoginPage from 'features/auth/loginPage';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { publicRouter } from './routes/mainrouter';

const mianRouter = () => (
    // <Routes>
    //     <Route path="/" element={<PrivateRoute />}>
    //         <Route path="/" element={<InnerContent />}>
    //             <Route path="/" element={<Navigate replace to="admin" />} />
    //             <Route path="admin" element={<AdminLayout />}>
    //                 {publicRouter.map((i: any) => (
    //                     <Route path={i.path} element={<i.element />} />
    //                 ))}
    //             </Route>
    //         </Route>
    //     </Route>
    //     <Route path="/login" element={<PublicRoute />}>
    //         <Route path="/login" element={<LoginPage />} />
    //     </Route>

    //     <Route path="*" element={<Navigate to={'/login'} />} />
    // </Routes>;
);

export default mianRouter;
