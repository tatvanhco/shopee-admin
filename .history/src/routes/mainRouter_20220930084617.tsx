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
import { Navigate, Route, Routes } from 'react-router-dom';

const MianRouter = () => (
    <Routes>
        <Route path="/admin" element={<InnerContent />}>
            <Route path="/admin" element={<Navigate to="admin/statistical" />} />
            <Route path="/statistical" element={<Statistical />} />
            <Route path="/catalogManager" element={<CatalogManager />} />
            <Route path="/customerManager" element={<CustomerManager />} />
            <Route path="/emloyeeManager" element={<EmloyeeManager />} />
            <Route path="/inventoryManagement" element={<InventoryManagement />} />
            <Route path="/manageOrders" element={<ManageOrders />} />
            <Route path="/productManager" element={<ProductManager />} />
        </Route>
    </Routes>
);

export default MianRouter;