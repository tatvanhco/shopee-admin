import React from 'react';
import SideBar from 'components/layout/Sidebar';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import Mainrouter from 'routes/mainrouter';
import { Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route p    ></Route>
                <Mainrouter />
            </Routes>
            {/* <SideBar /> */}
        </div>
    );
}

export default App;
