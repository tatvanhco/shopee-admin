import { Navigate, Route, Routes } from 'react-router-dom';

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
                </Route>
            </Route>
        </Route>
        <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default MianRouter;
