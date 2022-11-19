import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    return (
        <div className="SideBar">
            <div className="sideBar__items">
                <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'sidebar_active' : ''}>
                    Statistical
                </Link>
                <Link to="/productManager" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}>
                    Product Manager
                </Link>
                <Link to="/tab" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}>
                    Customer Management
                </Link>
                <Link to="/tab" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}>
                    Employee Manager
                </Link>
                <Link to="/settings" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}>
                    Catalog Management
                </Link>
                <Link to="/settings" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}>
                    Manage Orders
                </Link>
                <Link to="/settings" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}>
                    inventory Management
                </Link>
                <Link to="/login" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}>
                    Login
                </Link>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default SideBar;
