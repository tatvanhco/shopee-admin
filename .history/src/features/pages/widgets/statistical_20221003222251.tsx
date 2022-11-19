import * as React from 'react';
import styles from './widget.module.scss';

export const Statistical = () => {
    return (
        <div className={styles.widget}>
            <div className="left">
                <span className="title">USER</span>
                <span className="counter">515616</span>
            </div>
            <div className="right">right</div>
        </div>
    );
};
