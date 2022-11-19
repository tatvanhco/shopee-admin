import * as React from 'react';
import SideBar from './Sidebar';
import styles from './layout.module.scss';
import { publicRoute } from 'routes/mainrouter';
import { RouterProvider, Routes } from 'react-router-dom';

export const AdminLayout = ({ children: any }) => {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.warpper}>
                <div className={styles.App__Content}>
                    <Routes
                </div>
            </div>
        </div>
    );
};
