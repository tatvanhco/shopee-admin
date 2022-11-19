import './App.scss';
import './asset/globalStyle/globalStyle.scss';
import {
    AdminLayout,
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
import LoginPage from 'features/auth/loginPage';
import { PrivateRoute, PublicRoute } from 'components/common';
import SideBar from 'components/layout/Sidebar';

function App() {
    return (
        <div className="App">
            <SideBar/>
        </div>
    );
}

export default App;
