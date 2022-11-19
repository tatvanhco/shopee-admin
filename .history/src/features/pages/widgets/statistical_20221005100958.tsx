import * as React from 'react';
import styles from './widget.module.scss';
import clsx from 'clsx';

export const Statistical = () => {
    return (
        <div className={clsx(styles.widget, 'flex', p)}>
            <div className="left">
                <span className="title">USER</span>
                <span className="counter">515616</span>
                <span className="link">Xem tất cả</span>
            </div>
            <div className="right">right</div>
        </div>
    );
};
