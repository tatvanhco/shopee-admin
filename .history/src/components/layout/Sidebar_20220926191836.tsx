import * as React from 'react';
import clsx from 'clsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './layout.module.scss';

const SideBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const useAuth = () => {
        const checkLogin = localStorage.getItem('user');
        if (checkLogin) {
            return true;
        } else {
            return false;
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBar__items}>
                {
                    checkLogin && <>
                    
                    </>
                }
                
                <Link
                    to="/login"
                    className={clsx(location.pathname === '/login' ? 'sidebar_active' : '', styles.sideBar__item)}
                >
                    Login
                </Link>
                {location.pathname !== '/login' && (
                    <button onClick={handleLogout} className={styles.logout_btn}>
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default SideBar;
