import React from 'react';
import SideBar from 'components/layout/Sidebar';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import Mainrouter from 'routes/mainrouter';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/loginPage';
import { PrivateRoute, PublicRoute } from 'components/common';
import { AdminLayout } from 'components/layout';

function App() {
    return (
        <div className="App">
            
            {/* <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/" element={<Navigate replace to="admin" />}>
                        <Route path="/admin" element={<AdminLayout />} />
                    </Route>
                </Route>

                <Route path="/login" element={<PublicRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
            </Routes> */}
        </div>
    );
}

export default App;
