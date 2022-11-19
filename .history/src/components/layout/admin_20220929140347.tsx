import * as React from 'react';
import SideBar from './Sidebar';
import styles from './layout.module.scss';
import Mainrouter from 'routes/mainrouter';

export const AdminLayout = () => {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.warpper}><div className={styles.App__Content}>{Mainrouter}</div></div>
        </div>
    );
};
