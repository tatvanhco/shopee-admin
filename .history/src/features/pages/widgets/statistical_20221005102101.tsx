import * as React from 'react';
import styles from './widget.module.scss';
import clsx from 'clsx';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const Statistical = () => {
    return (
        <div className={clsx(styles.widget, 'flex', 'p-2')}>
            <div className={clsx(styles.left, 'flex', 'flex-col', 'justify-between')}>
                <span className={styles.tit}>USER</span>
                <span className="counter">515616</span>
                <span className="link">Xem tất cả</span>
            </div>
            <div className={clsx(styles.right, 'flex', 'flex-col', 'justify-between')}>
                <div className="percentage">
                    <KeyboardArrowUpIcon />
                    20%
                </div>
                <PersonOutlineOutlinedIcon className={styles.icon} />
            </div>
        </div>
    );
};
