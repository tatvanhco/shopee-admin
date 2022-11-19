import SideBar from 'components/layout/Sidebar';
import { Route, Routes } from 'react-router-dom';
import MainRouter from 'routes/mainRouter';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    
    return (
        <div className="App">
            {/* <SideBar />
            <div className="App__Content">
                <div className="warpper">
                    <MainRouter />
                </div>
            </div> */}
            <Routes>
                <Route path>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
