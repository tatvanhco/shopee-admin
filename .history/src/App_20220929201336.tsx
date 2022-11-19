import { AdminLayout } from 'components/layout';
import from 'components/layout/Sidebar';
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
