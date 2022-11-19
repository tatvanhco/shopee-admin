import { NotFound } from 'components/common';
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
                    <P path="/login" element={<LoginPage />}></P>
                    <Route path="/admin" element={<AdminLayout />}></Route>
                    <Route element={<NotFound />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
