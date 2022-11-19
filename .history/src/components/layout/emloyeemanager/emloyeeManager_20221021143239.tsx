import { Button } from '@mui/material';
import clsx from 'clsx';
import { Datatable } from 'features/pages/datatable/datatable';
import styles from './emloyeeManager.module.scss';

export interface emloyeeManagerProps {}

export const EmloyeeManager = () => {
    return (
        <div className={styles.employee_table}>
            <div className={clsx('flex', 'justify-between', 'mb-4', 'px-5')}>
                <h1 className={clsx(styles.title, 'font-bold')}>Quản lý nhân viên</h1>

                <div className={styles.employee_btn}>
                    <l className={styles.addEmployee_btn} variant="contained">
                        Thêm nhân viên
                    </l>
                </div>
            </div>

            <Datatable />
        </div>
    );
};
