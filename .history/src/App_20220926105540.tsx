import { NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import SideBar from 'components/layout/Sidebar';
import LoginPage from 'features/auth/pages/loginPage';
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainRouter from 'routes/mainRouter';
import './App.scss';

function App() {
    return (
        <div className="App">
            <SideBar />
            <MainRouter/>
        </div>
    );
}

export default App;
