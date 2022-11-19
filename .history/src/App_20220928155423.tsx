import { NotFound, PublicRoute } from 'components/common';
import SideBar from 'components/layout/Sidebar';
import LoginPage from 'features/auth/pages/loginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainRouter from 'routes/mainRouter';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <SideBar />
            <div className="App__Content">
                <div className="warpper">
                    <MainRouter />
                </div>
            </div>
        </div>
    );
}

export default App;
