import * as React from 'react';
import clsx from 'clsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './sidebar.module.scss';
import NavRouter from 'routes/navRouter';
import DashboardIcon from '@mui/icons-material/Dashboard';

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
            {/* <div className={styles.sideBar__items}>
                {user && (
                    <>
                        {NavRouter.sidebar.map((item) => (
                            <Link
                                key={item.text}
                                to={item.to}
                                className={clsx(
                                    location.pathname.includes(item.to) ? styles.sidebar_active : '',
                                    styles.sideBar__item,
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {location.pathname !== '/login' && (
                            <button onClick={handleLogout} className={styles.logout_btn}>
                                Đăng xuất
                            </button>
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
            </div> */}
            <div className={styles.top}>
                <span className={styles.logo}>Shopper Admin</span>
            </div>
            <hr />
            <div className={styles.center}>
                {user && (
                    <>
                        <ul>
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
                            <li>
                                <Link
                                    to="/admin/emloyeeManager"
                                    className={clsx(
                                        location.pathname === '/admin/emloyeeManager' ? styles.sidebar_active : '',
                                        styles.sideBar__item,
                                    )}
                                >
                                    <DashboardIcon className={styles.icon} />
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
                                    <DashboardIcon className={styles.icon} />
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
                                    <DashboardIcon className={styles.icon} />
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
                                    <DashboardIcon className={styles.icon} />
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
                                    <DashboardIcon className={styles.icon} />
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
                                    <DashboardIcon className={styles.icon} />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
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
                        </ul>
                        {location.pathname !== '/login' && (
                            <button onClick={handleLogout} className={styles.logout_btn}>
                                Đăng xuất
                            </button>
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
            <div className="bottom">theme color</div>
        </div>
    );
};

export default SideBar;
