import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    return()
    <div className="SideBar">
        <div className="sideBar__items">
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'sidebar_active' : ''}>
                Dashboard
            </Link>
            <Link to="/tab" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}>
                tab Demo
            </Link>
            <Link to="/settings" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}>
                Settings
            </Link>
            <Link to="/login" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}>
                Login
            </Link>
            <Link to="/logout" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}>
                Logout
            </Link>
            <button>Logout</button>
        </div>
    </div>;
};

export default SideBar;
