import React from 'react';
import SideBar from 'components/layout/Sidebar';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import Mainrouter from 'routes/mainrouter';

function App() {
    return (
        <div className="App">
            <Routes>

            <Mainrouter />
            </Routes>
            {/* <SideBar /> */}
        </div>
    );
}

export default App;
