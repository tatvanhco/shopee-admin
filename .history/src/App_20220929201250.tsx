import { AdminLayout } from 'components/layout';
import SideBar from 'components/layout/Sidebar';
import Mainrouter from 'routes/mainrouter';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <SideBar />
            <AdminLayout />
        </div>
    );
}

export default App;
