import * as React from 'react';
import styles from './dashboard.module.scss';
import Widget

export const Dashboard = () => {
    return (
        <div className={styles.widgets}>
            <Widget />
        </div>
    );
};
