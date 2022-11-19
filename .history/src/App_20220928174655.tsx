import SideBar from 'components/layout/Sidebar';
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

                <Route path="/admin"></Route>

                <Route></Route>
            </Routes>
        </div>
    );
}

export default App;
