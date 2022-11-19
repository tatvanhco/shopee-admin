import { Statistical } from 'features/pages/widgets/statistical';
import * as React from 'react';
import styles from './dashboard.module.scss';
import clsx from 'clsx';

export const Dashboard = () => {
    return (
        <div className={clsx(styles.widgets, 'flex', 'gap-5', 'py-3')}>
            <Statistical ="User" />
            <Statistical ="Đơn đặt hàng" />
            <Statistical ="Tổng doanh thu" />
            <Statistical ="Lợi nhuận thu được" />
        </div>
    );
};
