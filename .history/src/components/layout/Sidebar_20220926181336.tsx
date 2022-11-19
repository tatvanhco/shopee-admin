import * as React from 'react';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import styles from './layout.module.scss';

const SideBar = () => {
    const location = useLocation();
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBar__items}>
                <Link
                    to="/dashboard"
                    className={clsx(location.pathname === '/dashboard' ? 'sidebar_active' : '', styles.sideBar__item)}
                >
                    Statistical
                </Link>
                <Link
                    to="/productManager"
                    className={clsx(
                        location.pathname === '/productManager' ? 'sidebar_active' : '',
                        styles.sideBar__item,
                    )}
                >
                    Product Manager
                </Link>
                <Link
                    to="/customerManager"
                    className={clsx(
                        location.pathname === '/customerManager' ? 'sidebar_active' : '',
                        styles.sideBar__item,
                    )}
                >
                    Customer Management
                </Link>
                <Link
                    to="/emloyeeManager"
                    className={clsx(
                        location.pathname === '/emloyeeManager' ? 'sidebar_active' : '',
                        styles.sideBar__item,
                    )}
                >
                    Emloyee Manager
                </Link>
                <Link
                    to="/catalogManager"
                    className={clsx(
                        location.pathname === '/catalogManager' ? 'sidebar_active' : '',
                        styles.sideBar__item,
                    )}
                >
                    Catalog Management
                </Link>
                <Link
                    to="/manageOrders"
                    className={clsx(
                        location.pathname === '/manageOrders' ? 'sidebar_active' : '',
                        styles.sideBar__item,
                    )}
                >
                    Manage Orders
                </Link>
                <Link
                    to="/inventoryManagement"
                    className={clsx(
                        location.pathname === '/inventory Management' ? 'sidebar_active' : '',
                        styles.sideBar__item,
                    )}
                >
                    Inventory Management
                </Link>
                <Link
                    to="/login"
                    className={clsx(location.pathname === '/login' ? 'sidebar_active' : '', styles.sideBar__item)}
                >
                    Login
                </Link>
                <button className={styles.ogout}>Logout</button>
            </div>
        </div>
    );
};

export default SideBar;
