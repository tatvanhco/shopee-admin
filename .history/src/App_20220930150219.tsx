import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import { AdminLayout, InnerContent, ProductManager, Statistical } from 'components/layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/loginPage';
import { PrivateRoute, PublicRoute } from 'components/common';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/admin" element={<PrivateRoute />}>
                    <Route path='/admin' element={<Navigate replace to="/admin/statistical"/>}>

                    </Route>
                    <Route path="/admin" element={<AdminLayout />} />
                    {/* <Route path="/statistical" element={<Statistical />} />
                    <Route path="/productManager" element={<ProductManager />} /> */}
                    {/* </Route> */}
                </Route>
                {/* <Route path="/login" element={<PublicRoute />}>*/}
                {/* <Route path="/login" element={<LoginPage />}></Route> */}
                {/* </Route>*/}
                {/* <Route path="/" element={<LoginPage />} /> */}
            </Routes>
            {/* <AdminLayout /> */}
            <Routes>
                {/* <Route path="/admin" element={<PrivateRoute />}> */}
                <Route path="/admin" element={<AdminLayout />} />
                {/* <Route path="/statistical" element={<Statistical />} />
                    <Route path="/productManager" element={<ProductManager />} /> */}
                {/* </Route> */}
                {/* </Route> */}
                {/* <Route path="/login" element={<PublicRoute />}>*/}
                {/* <Route path="/login" element={<LoginPage />}></Route> */}
                {/* </Route>*/}
                {/* <Route path="/" element={<LoginPage />} /> */}
            </Routes>
        </div>
    );
}

export default App;
