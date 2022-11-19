import { AdminLayout } from 'components/layout';
import SideBar from 'components/layout/Sidebar';
import './App.scss';
import './asset/globalStyle/globalStyle.scss';

function App() {
    return (
        <div className="App">
            <SideBar />
            <div className={'warpper'}>
                <div className={'App__Content'}>
                        <Ma
                    {/* <Statistical />
                    <Routes>
                        <Route path="/statistical" element={<Statistical />} />
                        <Route path="/catalogManager" element={<CatalogManager />} />
                        <Route path="/customerManager" element={<CustomerManager />} />
                        <Route path="/emloyeeManager" element={<EmloyeeManager />} />
                        <Route path="/inventoryManagement" element={<InventoryManagement />} />
                        <Route path="/manageOrders" element={<ManageOrders />} />
                        <Route path="/productManager" element={<ProductManager />} />
                    </Routes> */}
                </div>
            </div>
            
        </div>
    );
}

export default App;
