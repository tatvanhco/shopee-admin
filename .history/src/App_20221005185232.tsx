import './App.scss';
import clsx from 'clsx';
import './asset/globalStyle/globalStyle.scss';
import SideBar from 'features/pages/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'features/pages/navbar/navbar';

function App() {
    return (
        <div className="App">
            <div className={clsx('containers')}>
                <SideBar />

                <div className={clsx('App__Content')}>
                    <Navbar />
                    <div className={clsx('warpper', 'px-5')}>
                        <Outlet />
                    </div>
                    <div className={clsx('footer', "text-center", "font-semibold")}>
                        <p>Designed with by VanhCo All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
