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
        <Route path="/emloyeeManager" element={<EmloyeeManager />} />
        <Route path="/inventoryManagement" element={<InventoryManagement />} />
        <Route path="/manageOrders" element={<ManageOrders />} />
        <Route path="/productManager" element={<ProductManager />} />
    </Routes>
);

export default MianRouter;
