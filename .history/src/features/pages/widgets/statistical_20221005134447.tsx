import * as React from 'react';
import styles from './widget.module.scss';
import clsx from 'clsx';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

interface type {
    test: string;
}

export const Statistical = () => {
    let data: any;

    const amount: Number = 100;
    const diff: Number = 20;

    switch (type.test) {
        case 'User':
            data = {
                title: 'Users',
                isMoney: false,
                link: 'Xem tất cả',
                icon: <PersonOutlineOutlinedIcon className={clsx(styles.icon, 'p-2')} />,
            };
            break;
        case 'Đơn đặt hàng':
            data = {
                title: 'Đơn đặt hàng',
                isMoney: false,
                link: 'Xem tất cả',
                icon: <ShoppingCartOutlinedIcon className={clsx(styles.icon, 'p-2')} />,
            };
            break;
        case 'Tổng doanh thu':
            data = {
                title: 'Tổng doanh thu',
                isMoney: false,
                link: 'Xem tất cả',
                icon: <ShoppingBagOutlinedIcon className={clsx(styles.icon, 'p-2')} />,
            };
            break;
        case 'Lợi nhuận thu được':
            data = {
                title: 'Lợi nhuận thu được',
                isMoney: false,
                link: 'Xem tất cả',
                icon: <MonetizationOnOutlinedIcon className={clsx(styles.icon, 'p-2')} />,
            };
            break;
        default:
            break;
    }
    return (
        <div className={clsx(styles.widget, 'flex', 'p-2')}>
            <div className={clsx(styles.left, 'flex', 'flex-col', 'justify-between')}>
                <span className={clsx(styles.title, 'font-semibold')}>{data.title}</span>
                <span className={clsx(styles.counter)}>
                    {data.isMoney && '$'} {amount}
                </span>
                <span className={clsx(styles.link)}>{data.link}</span>
            </div>
            <div className={clsx(styles.right, 'flex', 'flex-col', 'justify-between')}>
                <div className={clsx(styles.percentage, styles.positive, 'flex')}>
                    <KeyboardArrowUpIcon />
                </div>
                {data.icon}
            </div>
        </div>
    );
};
