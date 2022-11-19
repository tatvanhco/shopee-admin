import * as React from 'react';
import styles from './navbar.module.scss';
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
        <div className={styles.navbar}>
            <div className={styles.wrapper}>
                <div className={styles.search}>
                    <input type="text" placeholder="Search..." />
                    <SearchIcon />
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <LanguageIcon cl />
                    </div>
                    <div className={styles.item}>
                        <DarkModeOutlinedIcon cl />
                    </div>
                    <div className={styles.item}>
                        <LocalGroceryStoreOutlinedIcon cl />
                    </div>
                    <div className={styles.item}>
                        <MailOutlineOutlinedIcon cl />
                    </div>
                    <div className={styles.item}>
                        <NotificationsNoneOutlinedIcon cl />
                    </div>
                    <div className={styles.item}>
                        <FullscreenOutlinedIcon cl />
                    </div>
                    <div className={styles.item}>
                        <SegmentSharpIcon cl />
                    </div>
                    <div className={styles.item}>
                        <LanguageIcon cl />
                    </div>
                    <div className={styles.item}>
                        <SettingsOutlinedIcon cl />
                    </div>
                </div>
            </div>
        </div>
    );
};
