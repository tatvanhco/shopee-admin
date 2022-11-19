
import * as React from 'react';
import styles from './dashboard.module.scss';
import clsx from 'clsx';

export const Dashboard = () => {
    return (
        <div className={clsx(styles.widgets, 'flex', 'gap-5', 'py-3')}>
            <Statistical test="User" />
            <Statistical test="Đơn đặt hàng" />
            <Statistical test="Tổng doanh thu" />
            <Statistical test="Lợi nhuận thu được" />
        </div>
    );
};
