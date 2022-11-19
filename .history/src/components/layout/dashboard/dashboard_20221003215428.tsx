import * as React from 'react';
import styles from './dashboard.module.scss';
import { Statistical } from 'features/pages/widgets';

export const Dashboard = () => {
    return (
        <div className={styles.widgets}>
            <Statistical />
        </div>
    );
};
