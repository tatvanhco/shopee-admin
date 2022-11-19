import * as React from 'react';
import clsx from 'clsx';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './layout.module.scss';
import NavRouter from 'routes/navRouter';

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
                    {
                        NavRouter.sidebar.map((item) => {
                            <Link
                                to={item.to}
                                className={clsx()}
                            ></Link>
                        })
                    }
                    {/* <Link
                        to="/statistical"
                        className={clsx(
                            location.pathname === '/statistical' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Thống kê
                    </Link>
                    <Link
                        to="/productManager"
                        className={clsx(
                            location.pathname === '/productManager' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý sản phẩm
                    </Link>
                    <Link
                        to="/customerManager"
                        className={clsx(
                            location.pathname === '/customerManager' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý khách hàng
                    </Link>
                    <Link
                        to="/emloyeeManager"
                        className={clsx(
                            location.pathname === '/emloyeeManager' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý nhân viên
                    </Link>
                    <Link
                        to="/catalogManager"
                        className={clsx(
                            location.pathname === '/catalogManager' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý danh mục
                    </Link>
                    <Link
                        to="/manageOrders"
                        className={clsx(
                            location.pathname === '/manageOrders' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý đơn hàng
                    </Link>
                    <Link
                        to="/inventoryManagement"
                        className={clsx(
                            location.pathname === '/inventoryManagement' ? styles.sidebar_active : '',
                            styles.sideBar__item,
                        )}
                    >
                        Quản lý kho
                    </Link> */}
                    {location.pathname !== '/login' && (
                        <button onClick={handleLogout} className={styles.logout_btn}>
                            Đăng xuất
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
