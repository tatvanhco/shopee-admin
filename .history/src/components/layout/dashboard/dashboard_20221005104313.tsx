import { Statistical } from 'features/pages/widgets/statistical';
import * as React from 'react';
import styles from './dashboard.module.scss';
import clsx from 'clsx';

export const Dashboard = () => {
    return (
        <div className={clsx(styles.widgets, 'flex', 'gap-5', "py-3")}>
            <Statistical type="" />
            <Statistical type="" />
            <Statistical type="" />
            <Statistical type="" />
        </div>
    );
};
