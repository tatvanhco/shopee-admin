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
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.wrapper}>
                <div className={styles}>
                    <div className="list_icon">
                        <SortOutlinedIcon />
                    </div>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search..." />
                        <SearchIcon />
                    </div>
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
                        <div className={styles.counter}>1</div>
                    </div>
                    <div className={styles.item}>
                        <MailOutlineOutlinedIcon className={styles.icon} />
                        <div className={styles.counter}>1</div>
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
                        <img
                            src="https://react.spruko.com/nowa-ts/preview/static/media/2.3aeb713efd50cdbaf860.jpg"
                            alt=""
                            className={styles.avatar}
                        />
                    </div>
                    <div className={styles.item}>
                        <SettingsOutlinedIcon className={styles.icon} />
                    </div>
                </div>
            </div>
        </div>
    );
};
