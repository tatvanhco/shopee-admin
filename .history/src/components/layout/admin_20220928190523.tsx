import * as React from 'react';
import SideBar from './Sidebar';
import styles from './layout.module.scss';
import MainRouter from 'routes/mainRouter';

export const AdminLayout = () => {
    return (
        <div>
            <SideBar />
            <div className={styles.warpper}>
                <div className={styles.App__Content}>
                    <h2>hbskfbk</h2>
                </div>
            </div>
        </div>
    );
};
