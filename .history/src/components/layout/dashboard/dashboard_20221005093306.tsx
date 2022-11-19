import { Statistical } from 'features/pages/widgets/statistical';
import * as React from 'react';
im
import styles from './dashboard.module.scss';
import clsx from 'clsx';

export const Dashboard = () => {
    return (
        <div className={clsx(styles.widgets, 'flex')}>
            <Statistical />
            <Statistical />
            <Statistical />
            <Statistical />
        </div>
    );
};
