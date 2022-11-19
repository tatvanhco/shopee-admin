import * as React from 'react';
import './navbar.module.scss';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};
