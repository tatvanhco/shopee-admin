import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import clsx from 'clsx';
import * as React from 'react';
import styles from './table.module.scss';

export interface TableProps {}

export const Tabble = () => {
    const rows = [
        {
            stt: 1,
            custmer: 'vành cơ',
            productid: '001',
            productname: 'áo thun bê đê',
            productcost: '50.000',
            paymentmode: 'Tiền mặt',
            status: 'đã giao hàng',
        },
    ];
    return (
        <div className={styles.tables}>
            <table className={clsx(styles.table, 'table-fixed', 'border', 'border-collapse', 'border-slate-300')}>
                <thead>
                    <tr>
                        <th className={clsx('border', 'border-slate-300', 'text-center')}>STT</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center')}>Tên khách hàng</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center')}>Mã sản phẩm</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center')}>Tên sản phẩm</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center')}>Giá sản phẩm</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center')}>Phương thức thanh toán</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center')}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row) => (
                            <tr key={row.stt}>
                                <td key={row.stt} className={clsx('border', 'border-slate-300', 'text-center',)}>{row.stt}</td>
                                <td className={clsx('border', 'border-slate-300', 'text-center')}>{row}</td>
                                <td className={clsx('border', 'border-slate-300', 'text-center')}>001</td>
                                <td className={clsx('border', 'border-slate-300', 'text-center')}>áo thun con dê</td>
                                <td className={clsx('border', 'border-slate-300', 'text-center')}>50.000 VNĐ</td>
                                <td className={clsx('border', 'border-slate-300', 'text-center')}>tiền mặt</td>
                                <td className={clsx('border', 'border-slate-300', 'text-center')}>Đã giao hàng</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    );
};
