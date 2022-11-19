import { Route, Routes } from 'react-router-dom';
import {
    CatalogManager,
    CustomerManager,
    EmloyeeManager,
    InventoryManagement,
    ManageOrders,
    ProductManager,
    Statistical,
} from 'components/layout';

const MianRouter = () => (
    // <div className="sbdksf"></div>
    <Routes>
                        <Route path="/statistical" element={<Statistical />} />
                        <Route path="/catalogManager" element={<CatalogManager />} />
                        <Route path="/customerManager" element={<CustomerManager />} />
                        <Route path="/emloyeeManager" element={<EmloyeeManager />} />
                        <Route path="/inventoryManagement" element={<InventoryManagement />} />
                        <Route path="/manageOrders" element={<ManageOrders />} />
                        <Route path="/productManager" element={<ProductManager />} />
                    </Routes>
    </Routes>
);

export default MianRouter;
