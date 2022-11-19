import clsx from 'clsx';
import React, { useEffect } from 'react';
import styles from './datatable.module.scss';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Employees } from './datatablesoure';

export interface DataTableProps {}
export const Datatable = () => {
    // const [row, setRow] = React.useState();
    // const [row1, setRow1] = React.useState<dataModel[]>();
    // useEffect(() => {
    //     setRow1(rows);
    // }, []);
    // const handleDelete = (e: any) => {
    // console.log(row.filter((item) => item.id !== e));
    // var a = row.filter((item) => item.id !== e);
    // console.log(a);
    // setRow(a);
    // };
    // var result = Object.keys(row1).map((key) => [Number(key), row1[key]]);
    // console.log(row1);

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
                    {Employees.map((Employee) => (
                        <>
                            <tr key={Employee.id}>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    <Checkbox />
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>{Employee.id}</td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {Employee.employeeName}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {Employee.employId}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {Employee.email}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {Employee.pass}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>{Employee.sdt}</td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    <span
                                        className={clsx(
                                            styles.status,
                                            `${Employee.status == 'active' ? styles.active : styles.passive}`,
                                        )}
                                    >
                                        {Employee.status}
                                    </span>
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    <Link to="/admin/emloyeeManager">
                                        <BorderColorIcon className={styles.fixBtn} />
                                    </Link>
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    <DeleteOutlineOutlinedIcon className={styles.deleteBtn} />
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
