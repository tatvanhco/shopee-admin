import * as React from 'react';
import styles from './widget.module.scss';
import clsx from 'clsx';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Link } from 'react-router-dom';

export const Statistical = (props: any) => {
    let data: any;

    const amount: Number = 100;

    switch (props.test) {
        case 'User':
            data = {
                title: 'Users',
                isMoney: false,
                link: (
                    <Link to="/admin/customerManager">
                        <span className={clsx(styles.link)}>Xem tất cả</span>
                    </Link>
                ),
                icon: <PersonOutlineOutlinedIcon className={clsx(styles.icon, 'p-2')} />,
            };
            break;
        case 'Đơn đặt hàng':
            data = {
                title: 'Đơn đặt hàng',
                isMoney: false,
                link: (
                    <Link to="/admin/manageOrders">
                        <span className={clsx(styles.link)}>Xem tất cả</span>
                    </Link>
                ),
                icon: <ShoppingCartOutlinedIcon className={clsx(styles.icon, 'p-2')} />,
            };
            break;
        case 'Tổng doanh thu':
            data = {
                title: 'Tổng doanh thu',
                isMoney: false,
                link: (
                    <Link to="/admin/manageOrders">
                        <span className={clsx(styles.link)}>Xem tất cả</span>
                    </Link>
                ),
                icon: <ShoppingBagOutlinedIcon className={clsx(styles.icon, 'p-2')} />,
            };
            break;
        case 'Lợi nhuận thu được':
            data = {
                title: 'Lợi nhuận thu được',
                isMoney: false,
                link: (
                    <Link to="/admin/manageOrders">
                        <span className={clsx(styles.link)}>Xem tất cả</span>
                    </Link>
                ),
                icon: <MonetizationOnOutlinedIcon className={clsx(styles.icon, 'p-2')} />,
            };
            break;
        default:
            break;
    }
    return (
        <div className={clsx(styles.widget, 'flex', 'p-2')}>
            <div className={clsx(styles.left, 'flex', 'flex-col', 'justify-between', 'p-2')}>
                <span className={clsx(styles.title, 'font-semibold')}>{data.title}</span>
                <span className={clsx(styles.counter)}>
                    {data.isMoney && '$'} {amount}
                </span>
                {data.link}
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
