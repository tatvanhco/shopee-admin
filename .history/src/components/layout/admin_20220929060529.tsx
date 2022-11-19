import * as React from 'react';
import SideBar from './Sidebar';
import styles from './layout.module.scss';
import { Route, Routes } from 'react-router-dom';

export const AdminLayout = () => {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.warpper}>
                <div className={styles.App__Content}>
                    <Routes>
                        <Route />
                    </Routes>
                </div>
            </div>
        </div>
    );
};
