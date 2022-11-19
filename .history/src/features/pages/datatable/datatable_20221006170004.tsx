import clsx from 'clsx';
import * as React from 'react';
import styles from './datatable.module.scss';
import Checkbox from '@mui/material/Checkbox';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';

export interface DataTableProps {}

export const DataTable = () => {
    const rows = [
        {
            checkbox: <Checkbox />,
            stt: 1,
            employeeName: 'Tất Vành Cơ',
            employId: '001',
            email: 'vanhco@gmail.com',
            pass: '123456',
            sdt: '0900651615',
            status: 'active',
            fixBtn: (
                <Link to="/admin/emloyeeManager">
                    <BorderColorIcon className={styles.fixBtn} />
                </Link>
            ),
            deleteBtn: <DeleteOutlineOutlinedIcon className={styles.deleteBtn} />,
        },
        {
            checkbox: <Checkbox />,
            stt: 2,
            employeeName: 'Tất Vành Cơ 1',
            employId: '002',
            email: 'vanhco2@gmail.com',
            pass: '123456',
            sdt: '0900651515',
            status: 'passive',
            fixBtn: <BorderColorIcon c/>,
            deleteBtn: <DeleteOutlineOutlinedIcon />,
        },
    ];

    return (
        <div className={styles.data_table}>
            <table className={clsx(styles.table, 'table-fixed', 'border', 'border-collapse', 'border-slate-300')}>
                <thead>
                    <tr>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>
                            <Checkbox />
                        </th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>STT</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Tên nhân viên</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Mã nhân viên</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Email</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Password</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Số điện thoại</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Status</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Sửa</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.stt}>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                {row.checkbox}
                            </td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>{row.stt}</td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                {row.employeeName}
                            </td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                {row.employId}
                            </td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>{row.email}</td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>{row.pass}</td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>{row.sdt}</td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                <span
                                    className={clsx(
                                        styles.status,
                                        `${row.status == 'active' ? styles.active : styles.passive}`,
                                    )}
                                >
                                    {row.status}
                                </span>
                            </td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>{row.fixBtn}</td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                {row.deleteBtn}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
