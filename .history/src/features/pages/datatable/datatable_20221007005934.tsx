import clsx from 'clsx';
import React, { useEffect } from 'react';
import styles from './datatable.module.scss';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export interface DataTableProps {}
interface dataModel {
    id: number;
    employeeName: string;
    employId: string;
    email: string;
    pass: string;
    sdt: string;
    status: string;
}
[];
export const Datatable = () => {
    const rows: [] = [
        {
            id: 1,
            employeeName: 'Tất Vành Cơ',
            employId: '001',
            email: 'vanhco@gmail.com',
            pass: '123456',
            sdt: '0900651615',
            status: 'active',
        },
        {
            id: 2,
            employeeName: 'Tất Vành Cơ 1',
            employId: '002',
            email: 'vanhco2@gmail.com',
            pass: '123456',
            sdt: '0900651515',
            status: 'passive',
        },
        {
            id: 3,
            employeeName: 'Tất Vành Cơ 2',
            employId: '003',
            email: 'vanhco3@gmail.com',
            pass: '123456',
            sdt: '0900651515',
            status: 'active',
        },
    ];

    // const [row, setRow] = React.useState();
    const [row1, setRow1] = React.useState();
    useEffect(() => {
        setRow1(row1);
    }, []);
    const handleDelete = (e: any) => {
        // console.log(row.filter((item) => item.id !== e));
        // var a = row.filter((item) => item.id !== e);
        // console.log(a);
        // setRow(a);
    };

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
                    {row1.map((row: any, index: Number) => (
                        <>
                            <tr key={row.id}>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    <Checkbox />
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>{row.id}</td>
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
                                        onClick={() => handleDelete(row.id)}
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
