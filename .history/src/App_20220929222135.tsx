import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import MianRouter from 'routes/mainrouter';
import SideBar from 'components/layout/Sidebar';
import { AdminLayout } from 'components/layout';
import { Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <AdminLayout />
            </Routes>
        </div>
    );
}

export default App;
