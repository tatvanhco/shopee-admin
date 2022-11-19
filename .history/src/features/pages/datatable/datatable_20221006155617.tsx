import * as React from 'react';
import styles from './emloyeeManager.module.scss';

export interface emloyeeManagerProps {}

export const EmloyeeManager = () => {
    return <div className={styles.employee_table}>
        <h1 className={styles.title}>Quản lý nhân viên</h1>
        
    </div>;
};
