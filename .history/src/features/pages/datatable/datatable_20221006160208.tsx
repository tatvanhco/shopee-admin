import clsx from 'clsx';
import * as React from 'react';
import styles from './datatable.module.scss';

export interface DataTableProps {}

export const DataTable = () => {
    return (
        <div className={styles.data_table}>
            <table className={clsx(styles.table, 'table-fixed', 'border', 'border-collapse', 'border-slate-300')}>
                <thead>
                    <tr>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>STT</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Tên nhân viên</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}></th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Tên sản phẩm</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Giá sản phẩm</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>
                            Phương thức thanh toán
                        </th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    {/* {rows.map((row) => (
                        <tr key={row.stt}>
                            <td key={row.stt} className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                {row.stt}
                            </td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>{row.custmer}</td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                {row.productid}
                            </td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                {row.productname}
                            </td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                {row.productcost} VNĐ
                            </td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                {row.paymentmode}
                            </td>
                            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                <span className={clsx('status', `${row.handle}`)}>{row.status}</span>
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};
