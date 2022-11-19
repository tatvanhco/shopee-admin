import React from 'react';
import SideBar from 'components/layout/Sidebar';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import Mainrouter from 'routes/mainrouter';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/loginPage';
import { PrivateRoute } from 'components/common';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />} />

                <Route path='/' element={<PrivateRoute/}/>

                {/* <Mainrouter /> */}
            </Routes>
            {/* <SideBar /> */}
        </div>
    );
}

export default App;
