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
                                        key={item.text}
                                        to={item.to}
                                        className={clsx(
                                            location.pathname.includes(item.to) ? styles.sidebar_active : '',
                                            styles.sideBar__item,
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                            {location.pathname !== '/login' && (
                                <button onClick={handleLogout} className={styles.logout_btn}>
                                    Đăng xuất
                                </button>
                            )}
                        </ul>
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
