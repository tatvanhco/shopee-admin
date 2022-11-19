import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainRouter from 'routes/mainRouter';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/'></Route>
            </Routes>
        </div>
    );
}

export default App;
