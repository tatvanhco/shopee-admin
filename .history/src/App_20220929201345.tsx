import { AdminLayout, SideBar } from 'components/layout';
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
