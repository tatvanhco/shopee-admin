import SideBar from 'components/layout/Sidebar';
import React from 'react';
import MainRouter from 'routes/mainRouter';
import './App.scss';
import c
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className={clsx}>
            <SideBar />
            <MainRouter />
        </div>
    );
}

export default App;
