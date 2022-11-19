import * as React from 'react';
import styles from './widget.module.scss';
import clsx from 'clsx';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

type name = {
    type: string,\;
}

export const Statistical = ({ type }) => {
    let data;

    switch (type) {
        case 'User':
            data = {
                title: 'Users',
                isMoney: false,
                link: 'Xem tất cả',
                icon: <PersonOutlineOutlinedIcon className={styles.icon} />,
            };
            break;
        default:
            break;
    }
    return (
        <div className={clsx(styles.widget, 'flex', 'p-2')}>
            <div className={clsx(styles.left, 'flex', 'flex-col', 'justify-between')}>
                <span className={clsx(styles.title, 'font-semibold')}>USER</span>
                <span className={clsx(styles.counter)}>515616</span>
                <span className={clsx(styles.link)}>Xem tất cả</span>
            </div>
            <div className={clsx(styles.right, 'flex', 'flex-col', 'justify-between')}>
                <div className={clsx(styles.percentage, styles.positive, 'flex')}>
                    <KeyboardArrowUpIcon />
                    20%
                </div>
                <PersonOutlineOutlinedIcon className={clsx(styles.icon, 'p-2')} />
            </div>
        </div>
    );
};
