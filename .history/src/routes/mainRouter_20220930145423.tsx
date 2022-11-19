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
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';

const MianRouter = () => {
    // const routes = useRoutes([

    // ])
    return (
        <div>
            <Routes>
                <Route path="/" element={<InnerContent />}>
                    {/* <Route path="/admin" element={<Navigate replace to="/admin/statistical" />} /> */}
                    <Route path="/statistical" element={<Statistical />} />
                    <Route path="/admin/catalogManager" element={<CatalogManager />} />
                    <Route path="/admin/customerManager" element={<CustomerManager />} />
                    <Route path="/admin/emloyeeManager" element={<EmloyeeManager />} />
                    <Route path="/admin/inventoryManagement" element={<InventoryManagement />} />
                    <Route path="/admin/manageOrders" element={<ManageOrders />} />
                    <Route path="/admin/productManager" element={<ProductManager />} />
                </Route>
            </Routes>
        </div>
    );
};

export default MianRouter;
