import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import MianRouter from 'routes/mainrouter';
import SideBar from 'components/layout/Sidebar';
import { AdminLayout } from 'components/layout';

function App() {
    return (
        <div className="App">
            <Routes>
                
            </Routes>

            <AdminLayout />
            
        </div>
    );
}

export default App;
