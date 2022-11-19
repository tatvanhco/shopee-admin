import * as React from 'react';
import styles from './dashboard.module.scss';
import clsx from 'clsx';
import { Statistical } from 'features/pages/widgets/statistical';
import { Feature } from 'features/pages/feature/feature';
import { Charts } from 'features/pages/chart/charts';

export const Dashboard = () => {
    return (
        <>
            <div className={clsx(styles.widgets, 'flex', 'gap-5', 'py-3')}>
                <Statistical test="User" />
                <Statistical test="Đơn đặt hàng" />
                <Statistical test="Tổng doanh thu" />
                <Statistical test="Lợi nhuận thu được" />
            </div>
            <div className={clsx(styles.charts, 'flex')}>
                <Feature />
                <Charts />
            </div>
        </>
    );
};
