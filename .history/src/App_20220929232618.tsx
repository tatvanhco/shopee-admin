import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import { AdminLayout } from 'components/layout';
import { Outlet, Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/loginPage';
import { NotFound, PrivateRoute } from 'components/common';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/admin" element={<PrivateRoute />}>
                    <Route
                        path="/admin"
                        element={
                            <Outlet>
                                <AdminLayout />
                            </Outlet>
                        }
                    />
                </Route>
                <Route path="/" element={<LoginPage />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
