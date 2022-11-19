import { NotFound } from 'components/common';
import { AdminLayout } from 'components/layout';
import LoginPage from 'features/auth/loginPage';
import { Route, Routes } from 'react-router-dom';
import MainRouter from 'routes/mainRouter';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login">
                    <LoginPage />
                </Route>

                <Route path="/admin">
                    <AdminLayout />
                </Route>

                <Route>
                    <NotFound />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
