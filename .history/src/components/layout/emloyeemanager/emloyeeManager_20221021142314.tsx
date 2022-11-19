import { Button } from '@mui/material';
import clsx from 'clsx';
import { Datatable } from 'features/pages/datatable/datatable';
import * as React from 'react';
import styles from './emloyeeManager.module.scss';

export interface emloyeeManagerProps {}

export const EmloyeeManager = () => {
    return (
        <div className={styles.employee_table}>
            <div className={clsx(styles.employee_header, 'flex',  )}>
                <h1 className={styles.title}>Quản lý nhân viên</h1>

                <div className={styles.employee_btn}>
                    <Button variant="contained">Thêm nhân viên</Button>
                </div>
            </div>

            <Datatable />
        </div>
    );
};