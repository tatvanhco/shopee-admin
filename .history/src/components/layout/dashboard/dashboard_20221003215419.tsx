import * as React from 'react';
import styles from './dashboard.module.scss';
import { statistical } from 'features/pages/widgets';

export const Dashboard = () => {
    return (
        <div className={styles.widgets}>
            <Sta />
        </div>
    );
};
