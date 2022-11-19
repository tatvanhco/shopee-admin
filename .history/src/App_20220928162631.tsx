import SideBar from 'components/layout/Sidebar';
import { Route, Routes } from 'react-router-dom';
import MainRouter from 'routes/mainRouter';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" />
            </Routes>
        </div>
    );
}

export default App;
