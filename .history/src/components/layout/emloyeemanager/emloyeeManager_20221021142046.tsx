import { Button } from '@mui/material';
import { Datatable } from 'features/pages/datatable/datatable';
import * as React from 'react';
import styles from './emloyeeManager.module.scss';

export interface emloyeeManagerProps {}

export const EmloyeeManager = () => {
    return (
        <div className={styles.employee_table}>
            <div className="employee_header">
                <h1 className={styles.title}>Quản lý nhân viên</h1>

                <div className={styles.employee_btn}>
                    <Button variant="contained">Thêm </Button>
                </div>
            </div>

            <Datatable />
        </div>
    );
};
