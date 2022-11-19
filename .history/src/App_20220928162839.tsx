import { NotFound } from 'components/common';
import { AdminLayout } from 'components/layout';
import SideBar from 'components/layout/Sidebar';
import LoginPage from 'features/auth/pages/loginPage';
import { Route, Routes } from 'react-router-dom';
import MainRouter from 'routes/mainRouter';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<AdminLayout />}></Route>
                <Route path="" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
