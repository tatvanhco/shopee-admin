import * as React from 'react';
import SideBar from './Sidebar';
import styles from './layout.module.scss';
import { publicRoute } from 'routes/mainrouter';
import { Route, RouterProvider, Routes } from 'react-router-dom';

export const AdminLayout = ({ children: any }) => {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.warpper}>
                <div className={styles.App__Content}>
                    <Routes>
                        {publicRoute.map((route, index) => {
                            return <Route key={index} path={route.path} element={}/>
                        })}
                    </Routes>
                </div>
            </div>
        </div>
    );
};
