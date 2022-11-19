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
                    {user &&(
                        
                    )}
                    

                    {location.pathname !== '/login' && (
                        <button onClick={handleLogout} className={styles.logout_btn}>
                            Đăng xuấts
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
