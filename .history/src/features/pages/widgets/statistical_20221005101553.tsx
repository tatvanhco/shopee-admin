import * as React from 'react';
import styles from './widget.module.scss';
import clsx from 'clsx';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Statistical = () => {
    return (
        <div className={clsx(styles.widget, 'flex', 'p-2')}>
            <div className="left">
                <span className="title">USER</span>
                <span className="counter">515616</span>
                <span className="link">Xem tất cả</span>
            </div>
            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpIcon />
                    20%
                </div>
            </div>
        </div>
    );
};
