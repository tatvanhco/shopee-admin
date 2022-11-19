import * as React from 'react';
import styles from './dashboard.module.scss';
import clsx from 'clsx';
import { Statistical } from 'features/pages/widgets/statistical';
import { Feature } from 'features/pages/feature/feature';
import { Charts } from 'features/pages/chart/charts';
import { Tabble } from 'features/pages/table/table';

export const Dashboard = () => {
    return (
        <>
            <div className={clsx(styles.widgets, 'flex', 'gap-5', 'py-3')}>
                <Statistical test="User" />
                <Statistical test="Đơn đặt hàng" />
                <Statistical test="Tổng doanh thu" />
                <Statistical test="Lợi nhuận thu được" />
            </div>
            <div className={clsx(styles.charts, 'flex', 'py-2', 'gap-6')}>
                <Feature />
                <Charts />
            </div>
            <div className={clsx(styles.list_container, 'p-5', 'my-5')}>
                <div className={clsx(styles.list_title, 'font-medium', 'mb-3')}>Lịch sử giao dịch</div>
                <table />
            </div>
        </>
    );
};
