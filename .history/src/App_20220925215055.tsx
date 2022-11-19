import { NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import LoginPage from 'features/auth/pages/loginPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<NotFound />} />
                    < path="/login" element={<LoginPage />}></>
                    <PrivateRoute  path="/admin" element={<AdminLayout />}></PrivateRoute>
                    <Route element={<NotFound />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
