import { NotFound } from 'components/common';
import { AdminLayout } from 'components/layout';
import LoginPage from 'features/auth/pages/loginPage';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/admin">
                        <AdminLayout />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
