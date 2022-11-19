import * as React from 'react';
import './navbar.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import SegmentSharpIcon from '@mui/icons-material/SegmentSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

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
                        <MailOutlineOutlinedIcon />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon />
                    </div>
                    <div className="item">
                        <FullscreenOutlinedIcon />
                    </div>
                    <div className="item">
                        <SegmentSharpIcon />
                    </div>
                    <div className="item">
                        <LanguageIcon />
                    </div>
                    <div className="item">
                        <LanguageSettingsOutlinedIconIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};
