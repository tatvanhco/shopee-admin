import * as React from 'react';
import styles from './dashboard.module.scss';
import { statistical } from 'features/pages/widgets/statistical';

export const Dashboard = () => {
    return (
        <div className={styles.widgets}>
            <Sta />
        </div>
    );
};
