import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './layout.module.scss';
import NavRouter from 'routes/navRouter';

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

    const user = useAuth();
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBar__items}>
                <Link
                    to="/admin/statistical"
                    className={location.pathname === '/statistical' ? styles.sidebar_active : ''}
                >
                    bkadba
                </Link>
                <Link
                    to="/admin/statistical"
                    className={location.pathname === '/statistical' ? styles.sidebar_active : ''}
                >
                    bkadba
                </Link>
                <Link
                    to="/admin/statistical"
                    className={location.pathname === '/statistical' ? styles.sidebar_active : ''}
                >
                    bkadba
                </Link>

                <Link
                    to="/admin/statistical"
                    className={location.pathname === '/statistical' ? styles.sidebar_active : ''}
                >
                    bkadba
                </Link>
                <Link
                    to="/admin/statistical"
                    className={location.pathname === '/statistical' ? styles.sidebar_active : ''}
                >
                    bkadba
                </Link>
                <Link
                    to="/admin/statistical"
                    className={location.pathname === '/statistical' ? styles.sidebar_active : ''}
                >
                    bkadba
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
