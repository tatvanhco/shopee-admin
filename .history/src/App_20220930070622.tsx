import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import { AdminLayout, InnerContent } from 'components/layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/loginPage';
import { PrivateRoute, PublicRoute } from 'components/common';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/login' element={<PublicRoute/>}>
                    
                </Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/admin" element={<PrivateRoute />}>
                    {/* <Route path="/admin" element={<InnerContent />}> */}
                    {/* <Route path="/" element={<Navigate replace to="admin" />} /> */}
                    <Route path="/admin" element={<AdminLayout />} />
                    {/* </Route> */}
                </Route>
                <Route path="/" element={<LoginPage />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
