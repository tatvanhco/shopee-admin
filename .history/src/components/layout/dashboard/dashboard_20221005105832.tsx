import { Statistical } from 'features/pages/widgets/statistical';
import * as React from 'react';
import styles from './dashboard.module.scss';
import clsx from 'clsx';

interface type {
    name: string;
}

export const Dashboard = ({ type }) => {
    return (
        <div className={clsx(styles.widgets, 'flex', 'gap-5', 'py-3')}>
            <Statistical type="User" />
            <Statistical type="Đơn đặt hàng" />
            <Statistical type="Tổng doanh thu" />
            <Statistical type="Lợi nhuận thu được" />
        </div>
    );
};
