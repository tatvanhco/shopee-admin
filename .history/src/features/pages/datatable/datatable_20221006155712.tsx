import * as React from 'react';
import styles from './datatable.module.scss';

export interface DataTableProps {}

export const DataTable = () => {
    return (
        <div className={styles.data_table}>
            <h1 className={styles.title}>Quản lý nhân viên</h1>
        </div>
    );
};
