import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import { AdminLayout, InnerContent } from 'components/layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/loginPage';
import { PrivateRoute, PublicRoute } from 'components/common';

function App() {
    return (
        <div className="App">
            {/* <AdminLayout /> */}
            {/* <Routes> */}
                {/* <Route path="/admin" element={<PrivateRoute />}> */}
                {/* <Route path="/admin" element={<AdminLayout />} /> */}
                {/* </Route> */}
                {/* <Route path="/login" element={<PublicRoute />}> */}
                {/* <Route path="/login" element={<LoginPage />}></Route> */}
                {/* </Route> */}
                {/* <Route path="/" element={<LoginPage />} />   */}
            {/* </Routes> */}
        </div>
    );
}

export default App;
