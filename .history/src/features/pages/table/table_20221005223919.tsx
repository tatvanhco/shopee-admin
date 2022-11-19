import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import clsx from 'clsx';
import * as React from 'react';
import styles from './table.module.scss';

export interface TableProps {}

export const Tabble = () => {
    function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <div className={styles.tables}>
            <table className={clsx(styles.table, 'table-fixed', 'border', 'border-collapse', 'border-slate-600')}>
                <thead>
                    <tr>
                        <th className={clsx}>STT</th>
                        <th className={clsx}>Tên khách hàng</th>
                        <th className={clsx}>Mã sản phẩm</th>
                        <th className={clsx}>Tên sản phẩm</th>
                        <th className={clsx}>Giá sản phẩm</th>
                        <th className={clsx}>Phương thức thanh toán</th>
                        <th className={clsx}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>vành cơ</td>
                        <td>001</td>
                        <td>áo thun con dê</td>
                        <td>50.000 VNĐ</td>
                        <td>tiền mặt</td>
                        <td>Đã giao hàng</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
