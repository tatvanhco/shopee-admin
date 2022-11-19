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
                {user && (
                    <>
                        {NavRouter.sidebar.map((item) => (
                            <Link
                                key={item.text}
                                to={item.to}
                                className={clsx location.pathname.includes(item.path) ? 'sidebar_active' : ''}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {location.pathname !== '/login' && <button onClick={handleLogout}>logout</button>}
                    </>
                )}
                {/* <Link
                    to="/admin/statistical"
                    className={location.pathname === '/admin/statistical' ? styles.sidebar_active : ''}
                >
                    fsf
                </Link> */}
            </div>
        </div>
    );
};

export default SideBar;
