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
        <Route path="/" element={<In}>
            <Route path="/statistical" element={<Statistical />} />
            {/* <Route path="/catalogManager" element={<CatalogManager />} />
            <Route path="/customerManager" element={<CustomerManager />} />
            <Route path="/emloyeeManager" element={<EmloyeeManager />} />
            <Route path="/inventoryManagement" element={<InventoryManagement />} />
            <Route path="/manageOrders" element={<ManageOrders />} />
            <Route path="/productManager" element={<ProductManager />} /> */}
        </Route>
    </Routes>
);

export default MianRouter;
