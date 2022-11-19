import { NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import LoginPage from 'features/auth/loginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PrivateRoute/>}>
                    <Route path=''/>
                </Route>
                <Route path="/login" element={<LoginPage />} />

                <Route path="*" element={<Navigate to={'/'} />} />
            </Routes>
        </div>
    );
}

export default App;
