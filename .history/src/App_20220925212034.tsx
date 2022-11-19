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
                      
                    </Route>
                    <Route>{/* not found */}</Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
