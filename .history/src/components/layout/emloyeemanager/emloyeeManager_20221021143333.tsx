import { Button } from '@mui/material';
import clsx from 'clsx';
import { Datatable } from 'features/pages/datatable/datatable';
import { Link } from 'react-router-dom';
import styles from './emloyeeManager.module.scss';

export interface emloyeeManagerProps {}

export const EmloyeeManager = () => {
    return (
        <div className={styles.employee_table}>
            <div className={clsx('flex', 'justify-between', 'mb-4', 'px-5')}>
                <h1 className={clsx(styles.title, 'font-bold')}>Quản lý nhân viên</h1>

                <div className={styles.employee_btn}>
                    <Button className={styles.addEmployee_btn} variant="contained">
                        <Link to="/admin/emloyeeManager/">Thêm nhân viên</Link>
                    </Button>
                </div>
            </div>

            <Datatable />
        </div>
    );
};
