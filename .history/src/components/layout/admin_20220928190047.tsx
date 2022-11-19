import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from './Sidebar';

import styles from './layout.module.scss';

export interface AdminLayoutProps {}

export const AdminLayout = () => {
    return (
        <div>
            <SideBar />
            <div className={StyleSheet.warpper}></div>
        </div>
    );
};
