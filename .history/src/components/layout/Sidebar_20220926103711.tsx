import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    return (
        // const location = useLocation();
        <div className="SideBar">
            <div className="sideBar__items">
                <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'sidebar_active' : ''}>
                    Dashboard
                </Link>
                <Link to="/tab" className={location.pathname.includes('/tab') ? 'sidebar_active' : ''}></Link>
                
            </div>
        </div>
    );
};

export default SideBar;
