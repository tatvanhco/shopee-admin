import * as React from 'react';
import styles from './widget.module.scss';
import clsx from 'clsx';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export const Statistical = (type: any) => {
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
        case 'Đơn đặt hàng':
            data = {
                title: 'Đơn đặt hàng',
                isMoney: false,
                link: 'Xem tất cả',
                icon: <ShoppingCartOutlinedIcon className={styles.icon} />,
            };
            break;
        case 'Tổng doanh thu':
            data = {
                title: 'Tổng doanh thu',
                isMoney: false,
                link: 'Xem tất cả',
                icon: <ShoppingBagOutlinedIcon className={styles.icon} />,
            };
            break;
        case 'Lợi nhuận thu được':
            data = {
                title: 'Lợi nhuận thu được',
                isMoney: false,
                link: 'Xem tất cả',
                icon: <MonetizationOnOutlinedIcon className={styles.icon} />,
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
