import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import MianRouter from 'routes/mainrouter';
import { AdminLayout } from 'components/layout';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/loginPage';
import { PrivateRoute } from 'components/common';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/admin" element={<PrivateRoute />}>
                    <Route path='/admin' element={<Inner}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
