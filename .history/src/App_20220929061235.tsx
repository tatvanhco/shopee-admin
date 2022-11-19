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
                        <Route path="admin" element={<AdminLayout />}>
                        <Route path="/admin/statistical" element={<Statistical />} />
                        </Route>
                    </Route>
                </Route>
                <Route path="/login" element={<PublicRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>

                <Route path="*" element={<Navigate to={'/login'} />} />
            </Routes>
        </div>
    );
}

export default App;
