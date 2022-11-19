import { Widgets } from '@mui/icons-material';
import * as React from 'react';
import styles from './dashboard.module.scss';

export const Dashboard = () => {
    return (
        <div className={styles.widgets}>
            <Widget />
        </div>
    );
};
