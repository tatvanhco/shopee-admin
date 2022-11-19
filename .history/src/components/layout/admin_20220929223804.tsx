import { Routes } from 'react-router-dom';
import MianRouter from 'routes/mainrouter';
import SideBar from './Sidebar';

export const AdminLayout = () => {
    return (
        <div className={'container'}>
            <SideBar />
            <div className={'warpper'}>
                <div className={'App__Content'}>
                    <Routes>
                        <Route path="/statistical" element={<Statistical />} />
                        <Route path="/catalogManager" element={<CatalogManager />} />
                        <Route path="/customerManager" element={<CustomerManager />} />
                        <Route path="/emloyeeManager" element={<EmloyeeManager />} />
                        <Route path="/inventoryManagement" element={<InventoryManagement />} />
                        <Route path="/manageOrders" element={<ManageOrders />} />
                        <Route path="/productManager" element={<ProductManager />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};
