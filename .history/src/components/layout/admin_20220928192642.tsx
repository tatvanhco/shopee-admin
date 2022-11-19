import * as React from 'react';
import SideBar from './Sidebar';
import styles from './layout.module.scss';
import 

export const AdminLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.warpper}>
                <div className={styles.App__Content}>
                    {children}
                </div>
            </div>
        </div>
    );
};
