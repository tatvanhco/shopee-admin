import { NotFound, PrivateRoute } from 'components/common';
import SideBar from 'components/layout/Sidebar';
import React from 'react';
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
