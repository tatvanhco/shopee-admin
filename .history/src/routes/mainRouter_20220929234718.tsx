import {
    CatalogManager,
    CustomerManager,
    EmloyeeManager,
    InventoryManagement,
    ManageOrders,
    ProductManager,
    Statistical,
} from 'components/layout';
import { Route, Routes } from 'react-router-dom';

const MianRouter = () => (
    // <div className="sbdksf"></div>
    <Routes>
        <Route path="/admin/statistical" element={<Statistical />} />
        <Route path="/admin/catalogManager" element={<CatalogManager />} />
        <Route path="/admin/customerManager" element={<CustomerManager />} />
        <Route path="/admin/emloyeeManager" element={<EmloyeeManager />} />
        <Route path="/admin/inventoryManagement" element={<InventoryManagement />} />
        <Route path="/admin/manageOrders" element={<ManageOrders />} />
        <Route path="/admin/productManager" element={<ProductManager />} />
    </Routes>
);

export default MianRouter;
