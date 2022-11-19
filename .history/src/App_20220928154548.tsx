import { NotFound, PublicRoute } from 'components/common';
import PrivateRoute from 'components/common/PrivateRoute';
import { AdminLayout } from 'components/layout';
import LoginPage from 'features/auth/pages/loginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate replace to="/login" />}>
                    <Route path="login" element={<LoginPage />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
