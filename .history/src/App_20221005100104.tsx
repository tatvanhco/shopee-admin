import './App.scss';
import clsx from 'clsx';
import './asset/globalStyle/globalStyle.scss';
import SideBar from 'features/pages/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'features/pages/navbar/navbar';

function App() {
    return (
        <div className="App">
            <div className={clsx('container')}>
                <SideBar />

                <div className={clsx}>
                    <Navbar />
                    <div className="warpper">
                        <Outlet />
                    </div>
                    <div className="footer">
                        <p>Designed with by VanhCo All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
