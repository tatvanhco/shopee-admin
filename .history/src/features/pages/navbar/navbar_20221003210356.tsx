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
                        <LanguageIcon className={styles.icon} />
                    </div>
                    <div className={styles.item}>
                        <DarkModeOutlinedIcon className={styles.icon} />
                    </div>
                    <div className={styles.item}>
                        <LocalGroceryStoreOutlinedIcon className={styles.icon} />
                    </div>
                    <div className={styles.item}>
                        <MailOutlineOutlinedIcon className={styles.icon} />
                    </div>
                    <div className={styles.item}>
                        <NotificationsNoneOutlinedIcon className={styles.icon} />
                    </div>
                    <div className={styles.item}>
                        <FullscreenOutlinedIcon className={styles.icon} />
                    </div>
                    <div className={styles.item}>
                        <SegmentSharpIcon className={styles.icon} />
                    </div>
                    <div className={styles.item}>
                        <img src="../../../" alt="" />
                    </div>
                    <div className={styles.item}>
                        <SettingsOutlinedIcon className={styles.icon} />
                    </div>
                </div>
            </div>
        </div>
    );
};
