import { Statistical } from 'features/pages/widgets/statistical';
import * as React from 'react';
import styles from './dashboard.module.scss';
import clsx from 'clsx';


export const Dashboard = () => {
    return (
        <div className={ c styles.widgets}>
            <Statistical />
            <Statistical />
            <Statistical />
            <Statistical />
        </div>
    );
};
