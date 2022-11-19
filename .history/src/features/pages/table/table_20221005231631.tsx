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
            Statushandle: 'approved'
        },
        {
            stt: 2,
            custmer: 'vành cơ 1',
            productid: '002',
            productname: 'áo thun con dê',
            productcost: '55.000',
            paymentmode: 'Thanh toán online',
            status: 'Đang giao',
            Status: 'Delivering'
        },
        {
            stt: 3,
            custmer: 'vành cơ 2',
            productid: '003',
            productname: 'áo thun con heo',
            productcost: '100.000',
            paymentmode: 'Tiền mặt',
            status: 'Chưa xác nhận',
            Status: 'Delivering'
        },
        {
            stt: 4,
            custmer: 'vành cơ 3',
            productid: '004',
            productname: 'áo thun đàn ông',
            productcost: '60.000',
            paymentmode: 'Tiền mặt',
            status: 'đã giao hàng',
            Status: 'approved'
        },
        {
            stt: 5,
            custmer: 'vành cơ 4',
            productid: '005',
            productname: 'áo thun con chó',
            productcost: '70.000',
            paymentmode: 'Tiền mặt',
            status: 'Đang giao',
            Status: 'Delivering'
        },
    ];
    return (
        <div className={styles.tables}>
            <table className={clsx(styles.table, 'table-fixed', 'border', 'border-collapse', 'border-slate-300')}>
                <thead>
                    <tr>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>STT</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Tên khách hàng</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Mã sản phẩm</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Tên sản phẩm</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Giá sản phẩm</th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>
                            Phương thức thanh toán
                        </th>
                        <th className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
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
                            <td className={clsx(styles.status, 'border', 'border-slate-300', 'text-center', 'py-3', )}>
                                {row.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
