import * as React from 'react';
import SideBar from './Sidebar';
import styles from './layout.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Statistical } from './statistical';

export const AdminLayout = () => {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.warpper}>
                <div className={styles.App__Content}>
                    <Routes>
                        <Route path="/admin/statistical" element={<Statistical />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};
