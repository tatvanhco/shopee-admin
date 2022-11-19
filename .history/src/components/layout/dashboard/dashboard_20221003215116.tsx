import * as React from 'react';
import styles from './dashboard.module.scss';
import { Ưidget } from 'features/pages/widgets/widget';

export const Dashboard = () => {
    return (
        <div className={styles.widgets}>
            <Widget />
        </div>
    );
};
