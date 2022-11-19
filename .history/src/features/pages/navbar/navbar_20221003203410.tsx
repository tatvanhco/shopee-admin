import * as React from 'react';
import './navbar.module.scss';
import SearchIcon from '@mui/icons-material/Search';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon />
                </div>
                .items
            </div>
        </div>
    );
};
