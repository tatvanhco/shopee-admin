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
        <div className={styles.table}>
            <table className={clsx('border-separate', 'border', 'border-slate-500')}>
                <thead>
                    <tr>
                        <th className={clsx('border', 'border-slate-600')}>State</th>
                        <th className={clsx('border', 'border-slate-600')}>City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-700 ...">Indiana</td>
                        <td className="border border-slate-700 ...">Indianapolis</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 ...">Ohio</td>
                        <td className="border border-slate-700 ...">Columbus</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 ...">Michigan</td>
                        <td className="border border-slate-700 ...">Detroit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
