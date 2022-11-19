import * as React from 'react';
import './navbar.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon />
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon />
                    </div>
                    <div className="item">
                        <LocalGroceryStoreOutlinedIcon />
                    </div>
                    <div className="item">
                        <LanguageIcon />
                    </div>
                    <div className="item">
                        <LanguageIcon />
                    </div>
                    <div className="item">
                        <LanguageIcon />
                    </div>
                    <div className="item">
                        <LanguageIcon />
                    </div>
                    <div className="item">
                        <LanguageIcon />
                    </div>
                    <div className="item">
                        <LanguageIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};
