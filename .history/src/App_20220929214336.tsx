import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import MianRouter from 'routes/mainrouter';
import SideBar from 'components/layout/Sidebar';

function App() {
    return (
        <div className="App">
            <SideBar />
            <MianRouter />
            
        </div>
    );
}

export default App;
