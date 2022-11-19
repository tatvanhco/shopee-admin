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
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<PrivateRoute></PrivateRoute>}></Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
