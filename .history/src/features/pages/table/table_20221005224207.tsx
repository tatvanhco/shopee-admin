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
            <table className={clsx(styles.table, 'table-fixed', 'border', 'border-collapse', 'border-slate-400', )}>
                <thead>
                    <tr>
                        <th className={clsx('border', 'border-slate-400', 'text-center')}>STT</th>
                        <th className={clsx('border', 'border-slate-400', 'text-center')}>Tên khách hàng</th>
                        <th className={clsx('border', 'border-slate-400', 'text-center')}>Mã sản phẩm</th>
                        <th className={clsx('border', 'border-slate-400', 'text-center')}>Tên sản phẩm</th>
                        <th className={clsx('border', 'border-slate-400', 'text-center')}>Giá sản phẩm</th>
                        <th className={clsx('border', 'border-slate-400', 'text-center')}>Phương thức thanh toán</th>
                        <th className={clsx('border', 'border-slate-400', 'text-center')}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={clsx('border', 'border-slate-400', 'text-center')}>1</td>
                        <td className={clsx('border', 'border-slate-400', 'text-center')}>vành cơ</td>
                        <td className={clsx('border', 'border-slate-400', 'text-center')}>001</td>
                        <td className={clsx('border', 'border-slate-400', 'text-center')}>áo thun con dê</td>
                        <td className={clsx('border', 'border-slate-400', 'text-center')}>50.000 VNĐ</td>
                        <td className={clsx('border', 'border-slate-400', 'text-center')}>tiền mặt</td>
                        <td className={clsx('border', 'border-slate-400', 'text-center')}>Đã giao hàng</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
