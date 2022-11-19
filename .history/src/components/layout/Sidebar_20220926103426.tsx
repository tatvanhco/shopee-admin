import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    return function (, location = useLocation()) {
        return;
    };
        <div className="SideBar">
            <div className="sideBar__items">
                <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'sidebar_active' : ''}>
                    Dashboard
                </Link>
            </div>
        </div>
    );
};

export default SideBar;