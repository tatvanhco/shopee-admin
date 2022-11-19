import { NotFound, PublicRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import LoginPage from 'features/auth/pages/loginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <Routes>
        <div className="App">
            
                <Route path="/" element={<PublicRoute />}>
                    <Route path="/login" element={<LoginPage />}></Route>
                </Route>
                <Route path="/admin" element={<AdminLayout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
