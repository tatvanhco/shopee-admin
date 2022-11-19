import * as React from 'react';
import styles from './datatable.module.scss';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export interface ManageOrdersProps {}

export const ManageOrders = () => {
    const 

    return (
        <>
            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                <Link to="/admin/emloyeeManager">
                    <BorderColorIcon className={styles.fixBtn} />
                </Link>
            </td>
            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                <DeleteOutlineOutlinedIcon onClick={() => handleDelete()} className={styles.deleteBtn} />
            </td>
        </>
    );
};
