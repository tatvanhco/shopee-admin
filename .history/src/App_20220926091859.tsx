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
                    <Route path="/" element={<NotFound />}></Route>
                    <Route path="login" element={<LoginPage />}></Route>
                    <Route path="admin" element={<AdminLayout />}>
                      <React.Fragment>
                        <PrivateRoute
                      </React.Fragment>
                    </Route>
                    <Route element={<NotFound />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
