import { PrivateRoute, PublicRoute } from 'components/common';
import {
    CatalogManager,
    CustomerManager,
    EmloyeeManager,
    InnerContent,
    InventoryManagement,
    ManageOrders,
    ProductManager,
    Statistical,
} from 'components/layout';
import LoginPage from 'features/auth/loginPage';
import { Navigate, Route, Routes } from 'react-router-dom';

const MianRouter = () => (
    <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route path="/admin" element={<InnerContent />}>
                <Route path="/admin" element={<Navigate replace to="/admin/statistical" />}>
                    <Route path="/admin/statistical" element={<Statistical />} />
                    <Route path="/admin/catalogManager" element={<CatalogManager />} />
                    <Route path="/admin/customerManager" element={<CustomerManager />} />
                    <Route path="/admin/emloyeeManager" element={<EmloyeeManager />} />
                    <Route path="/admin/inventoryManagement" element={<InventoryManagement />} />
                    <Route path="/admin/manageOrders" element={<ManageOrders />} />
                    <Route path="/admin/productManager" element={<ProductManager />} />
                </Route>
            </Route>
        </Route>
        <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />}></Route>
        </Route>
        <Route path="/" element={<LoginPage />} />
    </Routes>
);

export default MianRouter;
