import { NotFound, PrivateRoute, PublicRoute } from 'components/common';
import { AdminLayout, InnerContent } from 'components/layout';
import LoginPage from 'features/auth/loginPage';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/" element={<InnerContent />}>
                        <Route path="/" element={<Navigate replace to="admin" />} />
                        <Route path="dashboard" element={<AdminLayout />} />
                    </Route>
                </Route>
                <Route path="/login" element={<PublicRoute />}>
                    <Router path/>
                </Route>

                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
        </div>
    );
}

export default App;
