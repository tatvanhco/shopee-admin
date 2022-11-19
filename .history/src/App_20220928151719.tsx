import SideBar from 'components/layout/Sidebar';
import React from 'react';
import { Route } from 'react-router-dom';
import MainRouter from 'routes/mainRouter';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <SideBar />

            <Route path="/">
                <div className="App__Content">
                    <div className="warpper">
                        <MainRouter />
                    </div>
                </div>
            </Route>
        </div>
    );
}

export default App;
