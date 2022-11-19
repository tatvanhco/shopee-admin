import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import MianRouter from 'routes/mainrouter';
import { AdminLayout } from 'components/layout';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/login' element={<A}>

                </Route>
                <AdminLayout />
            </Routes>
        </div>
    );
}

export default App;
