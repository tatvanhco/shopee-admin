import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './layout.module.scss'

const SideBar = () => {
    const location = useLocation();
    return (
        <div className="sideBar">
            <div className="sideBar__items">
                <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'sidebar_active' : ''}>
                    Statistical
                </Link>
                <Link to="/productManager" className={location.pathname === '/productManager' ? 'sidebar_active' : ''}>
                    Product Manager
                </Link>
                <Link
                    to="/customerManager"
                    className={location.pathname === '/customerManager' ? 'sidebar_active' : ''}
                >
                    Customer Management
                </Link>
                <Link
                    to="/employeeManager"
                    className={location.pathname === '/employeeManager' ? 'sidebar_active' : ''}
                >
                    Employee Manager
                </Link>
                <Link to="/catalogManager" className={location.pathname === '/catalogManager' ? 'sidebar_active' : ''}>
                    Catalog Management
                </Link>
                <Link to="/manageOrders" className={location.pathname === '/manageOrders' ? 'sidebar_active' : ''}>
                    Manage Orders
                </Link>
                <Link
                    to="/inventoryManagement"
                    className={location.pathname === '/inventory Management' ? 'sidebar_active' : ''}
                >
                    Inventory Management
                </Link>
                <Link to="/login" className={location.pathname === '/login' ? 'sidebar_active' : ''}>
                    Login
                </Link>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default SideBar;
