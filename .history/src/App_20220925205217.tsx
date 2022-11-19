import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/login'></Route>
                    <Route path='/admin'></Route>
                    <Route>
                      {/*  */}
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
