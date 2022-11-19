import { Route, Routes } from 'react-router-dom';
import MianRouter from 'routes/mainrouter';
import SideBar from './Sidebar';
import {
    CatalogManager,
    CustomerManager,
    EmloyeeManager,
    InventoryManagement,
    ManageOrders,
    ProductManager,
    Statistical,
} from 'components/layout';

export const AdminLayout = () => {
    return (
        <div className={'container'}>
            <SideBar />
            <div className={'warpper'}>
                <div className={'App__Content'}>
                    
                </div>
            </div>
        </div>
    );
};
