import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import MianRouter from 'routes/mainrouter';
import { AdminLayout } from 'components/layout';
import { Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                <AdminLayout />
            </Routes>
        </div>
    );
}

export default App;
