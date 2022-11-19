import * as React from 'react';
import clsx from 'clsx';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './layout.module.scss';
import NavRouter from 'routes/navRouter';
import { NavLink } from 'react-router-dom';

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
        <div className="test">
            <div className={styles.sideBar}>
                <div className={styles.sideBar__items}>
                    {/* {NavRouter.sidebar.map((item) => {
                        <>
                            <Link
                                to={item.to}
                                className={clsx(
                                    location.pathname.includes(item.to) ? styles.sidebar_active : '',
                                    styles.sideBar__item,
                                )}
                            >
                                {item.name}
                            </Link>
                        </>;
                    })} */}
                    <NavLink
                    <Link
                        to="/admin/statistical"
                        className={clsx(
                            location.pathname === '/admin/statistical' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Thống kê
                    </Link>
                    <Link
                        to="/admin/productManager"
                        className={clsx(
                            location.pathname === '/admin/productManager' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý sản phẩm
                    </Link>
                    <Link
                        to="/admin/customerManager"
                        className={clsx(
                            location.pathname === '/admin/customerManager' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý khách hàng
                    </Link>
                    <Link
                        to="/admin/emloyeeManager"
                        className={clsx(
                            location.pathname === '/admin/emloyeeManager' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý nhân viên
                    </Link>
                    <Link
                        to="/admin/catalogManager"
                        className={clsx(
                            location.pathname === '/admin/catalogManager' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý danh mục
                    </Link>
                    <Link
                        to="/admin/manageOrders"
                        className={clsx(
                            location.pathname === '/admin/manageOrders' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý đơn hàng
                    </Link>
                    <Link
                        to="/admin/inventoryManagement"
                        className={clsx(
                            location.pathname === '/admin/inventoryManagement' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý kho
                    </Link>
                    {location.pathname !== '/login' && (
                        <button onClick={handleLogout} className={styles.logout_btn}>
                            Đăng xuất
                        </button>
                    )}
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default SideBar;
