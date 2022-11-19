import * as React from 'react';
import styles from './dashboard.module.scss';
import { widget } from 'features/pages/widgets/statatiscal';

export const Dashboard = () => {
    return (
        <div className={styles.widgets}>
            <widget />
        </div>
    );
};
