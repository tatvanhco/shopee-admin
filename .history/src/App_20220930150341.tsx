import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import { AdminLayout, CatalogManager, CustomerManager, InnerContent, ProductManager, Statistical } from 'components/layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/loginPage';
import { PrivateRoute, PublicRoute } from 'components/common';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/admin" element={<PrivateRoute />}>
                    <Route path="/admin" element={<Navigate replace to="/admin/statistical" />}>
                    <Route path="/admin/statistical" element={<Statistical />} />
                             <Route path="/admin/catalogManager" element={<CatalogManager />} />
                             <Route path="/admin/customerManager" element={<CustomerManager />} />
                             <Route path="/admin/emloyeeManager" element={<EmloyeeManager />} />
                             <Route path="/admin/inventoryManagement" element={<InventoryManagement />} />
                             <Route path="/admin/manageOrders" element={<ManageOrders />} />
                             <Route path="/admin/productManager" element={<ProductManager />} />
                    </Route>

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
