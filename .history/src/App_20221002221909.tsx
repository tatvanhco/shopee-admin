import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import SideBar from 'components/layout/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <div className="container">
                <SideBar />

                <div className="App__Content">
                    <div className="hahaha"></div>
                    <div className="warpper">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
