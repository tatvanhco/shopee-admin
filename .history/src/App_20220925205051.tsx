import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='' />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
