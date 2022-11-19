import { NotFound } from 'components/common';
import { AdminLayout } from 'components/layout';
import LoginPage from 'features/auth/pages/loginPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <B>
            <div>
                <Routes>
                    <Route path="/" element={<NotFound />}></Route>
                    <Route path="login" element={<LoginPage />}></Route>
                    <Route path="admin" element={<AdminLayout />}></Route>
                    <Route element={<NotFound />}></Route>
                </Routes>
            </div>
        </B>
    );
}

export default App;
