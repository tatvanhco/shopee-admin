import SideBar from 'components/layout/Sidebar';
import React from 'react';
import MainRouter from 'routes/mainRouter';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <SideBar />

        
            <div className="App__Content">
                <div className="warpper">
                    <MainRouter />
                </div>
            </div>
        </div>
    );
}

export default App;
