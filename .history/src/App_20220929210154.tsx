import SideBar from 'components/layout/Sidebar';
import Mainrouter from 'routes/mainrouter';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
         <SideBar />
            {<div className={'warpper'}>
                <div className={'App__Content'}>{Mainrouter}</div>
            </div> */}
        </div>
    );
}

export default App;
