import clsx from 'clsx';
import * as React from 'react';
import styles from './datatable.module.scss';
import Checkbox from '@mui/material/Checkbox';
import { rows } from './datatablesoure';
import { Link } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export interface DataTableProps {}

export const DataTable = () => {
    const [data, setData] = React.useState(rows);
    const handleDelete = () => {};

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
                        <>
                            <tr key={row.stt}>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    <Checkbox />
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>{row.stt}</td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {row.employeeName}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {row.employId}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {row.email}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {row.pass}
                                </td>
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
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    <Link to="/admin/emloyeeManager">
                                        <BorderColorIcon className={styles.fixBtn} />
                                    </Link>
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    <DeleteOutlineOutlinedIcon
                                        onClick={() => handleDelete(
                                            
                                        )}
                                        className={styles.deleteBtn}
                                    />
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
