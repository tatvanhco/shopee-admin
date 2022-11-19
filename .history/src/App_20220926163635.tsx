import SideBar from 'components/layout/Sidebar';
import React from 'react';
import MainRouter from 'routes/mainRouter';
import './App.scss';
import './asset/globalStyle/globalStyle.s'

function App() {
    return (
        <div className="App">
            <SideBar />
            <MainRouter/>
        </div>
    );
}

export default App;
