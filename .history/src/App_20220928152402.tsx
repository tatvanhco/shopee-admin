import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainRouter from 'routes/mainRouter';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Navigate}></Route>
            </Routes>
        </div>
    );
}

export default App;
