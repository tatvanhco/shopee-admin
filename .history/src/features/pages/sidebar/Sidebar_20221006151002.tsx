import * as React from 'react';
import clsx from 'clsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './sidebar.module.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

const SideBar = () => {
    const useAuth = () => {
        const checkLogin = localStorage.getItem('user');
        if (checkLogin) {
            return true;
        } else {
            return false;
        }
    };
    const location = useLocation();
    const navigate = useNavigate();
    const user = useAuth();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };
    return (
        <div className={styles.sideBar}>
            <div className={styles.top}>
                <span className={styles.logo}>Shopper Admin</span>
            </div>
            <hr />
            <div className={styles.center}>
                {user && (
                    <>
                        <ul>
                            <p className={styles.title}>MAIN</p>
                            <li>
                                <Link
                                    to="/admin/dashboard"
                                    className={clsx(
                                        location.pathname === '/admin/dashboard' ? styles.sidebar_active : '',
                                        styles.sideBar__item,
                                    )}
                                >
                                    <DashboardIcon className={styles.icon} />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <p className={styles.title}>LISTS</p>
                            <li>
                                <Link
                                    to="/admin/emloyeeManager"
                                    className={clsx(
                                        location.pathname === '/admin/emloyeeManager' ? styles.sidebar_active : '',
                                        styles.sideBar__item,
                                    )}
                                >
                                    <AccountBoxIcon className={styles.icon} />
                                    <span>Quản lý nhân viên</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/admin/customerManager"
                                    className={clsx(
                                        location.pathname === '/admin/customerManager' ? styles.sidebar_active : '',
                                        styles.sideBar__item,
                                    )}
                                >
                                    <PersonIcon className={styles.icon} />
                                    <span>Quản lý khách hàng</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/admin/productManager"
                                    className={clsx(
                                        location.pathname === '/admin/productManager' ? styles.sidebar_active : '',
                                        styles.sideBar__item,
                                    )}
                                >
                                    <StorefrontIcon className={styles.icon} />
                                    <span>Quản lý sản phẩm</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/admin/catalogManager"
                                    className={clsx(
                                        location.pathname === '/admin/catalogManager' ? styles.sidebar_active : '',
                                        styles.sideBar__item,
                                    )}
                                >
                                    <CategoryIcon className={styles.icon} />
                                    <span>Quản lý danh mục</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/admin/manageOrders"
                                    className={clsx(
                                        location.pathname === '/admin/manageOrders' ? styles.sidebar_active : '',
                                        styles.sideBar__item,
                                    )}
                                >
                                    <CreditCardIcon className={styles.icon} />
                                    <span>Quản lý đơn hàng</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/admin/inventoryManagement"
                                    className={clsx(
                                        location.pathname === '/admin/inventoryManagement' ? styles.sidebar_active : '',
                                        styles.sideBar__item,
                                    )}
                                >
                                    <InventoryIcon className={styles.icon} />
                                    <span>Quản lý kho</span>
                                </Link>
                            </li>
                            <p className={styles.title}>KHÁC</p>
                        </ul>
                        {location.pathname !== '/login' && (
                            <Button onClick={handleLogout} className={styles.logout_btn}>
                                <LogoutIcon className={styles.icon} />
                                <span>Đăng xuất</span>
                            </Button>
                        )}
                    </>
                )}
                {!user && (
                    <Link
                        to="/login"
                        className={clsx(
                            location.pathname === '/login' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Login
                    </Link>
                )}
            </div>
            {/* <div className="bottom">theme color</div> */}
        </div>
    );
};

export default SideBar;
