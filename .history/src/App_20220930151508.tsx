import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import SideBar from 'components/layout/Sidebar';
import MianRouter from 'routes/mainrouter';

function App() {
    return (
        <div className="App">
            <SideBar />

            <div className="warpper">
                <div className="App__Content">
                    <MianRouter />
                </div>
            </div>
        </div>
    );
}

export default App;
