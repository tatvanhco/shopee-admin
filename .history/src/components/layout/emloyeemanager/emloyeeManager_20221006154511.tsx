import { Tabble } from 'features/pages/table/table';
import * as React from 'react';
import styles from '/emloyeeManager.module.scss';

export interface emloyeeManagerProps {}

export const EmloyeeManager = () => {
    return (
        <div className={styles.employee_Table}>
            <Tabble />
        </div>
    );
};
