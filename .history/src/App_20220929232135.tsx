import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import MianRouter from 'routes/mainrouter';
import { AdminLayout, InnerContent } from 'components/layout';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/loginPage';
import { NotFound, PrivateRoute } from 'components/common';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/admin" element={<PrivateRoute />}>
                    <InnerContent
                    <Route path="/admin" element={<AdminLayout />} />
                </Route>
                <Route path="/" element={<LoginPage />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
