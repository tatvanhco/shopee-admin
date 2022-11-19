import { Statistical } from 'features/pages/widgets/statistical';
import * as React from 'react';
import styles from './dashboard.module.scss';
import clsx from 'clsx';

export const Dashboard = () => {
    return (
        <div className={clsx(styles.widgets, 'flex', 'gap-5', 'py-3')}>
            <Statistical title="User" />
            <Statistical title="Đơn đặt hàng" />
            <Statistical title="Tổng doanh thu" />
            <Statistical title="Lợi nhuận thu được" />
        </div>
    );
};
