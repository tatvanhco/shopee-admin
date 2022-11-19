import { AdminLayout } from 'components/layout';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <sideBar />
            <AdminLayout />
        </div>
    );
}

export default App;