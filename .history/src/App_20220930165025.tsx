import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import SideBar from 'components/layout/Sidebar';
import MianRouter from 'routes/mainrouter';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <div className="container">
                <SideBar />

                .App__Content
                <Outlet />
            </div>
        </div>
    );
}

export default App;
