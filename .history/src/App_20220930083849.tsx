import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import { AdminLayout, InnerContent } from 'components/layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/loginPage';
import { PrivateRoute, PublicRoute } from 'components/common';
import MianRouter from 'routes/mainrouter';
import Sidebar from 'components/layout/Sidebar';

function App() {
    return (
        <div className="app">
            {/** Sidebar */}
            <Sidebar />

            {/** Inner container */}
            <MianRouter />
        </div>
    );
}

export default App;
