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
                        {
                            <Link to="/admin/statistical" className={location.}></Link>
                            // NavRouter.sidebar.map((item) => {
                            //     <Link
                            //         key={item.text}
                            //         to={item.to}
                            //         className={location.pathname.includes(item.to) ? styles.sidebar_active : ''}
                            //     >
                            //         {item.name}
                            //     </Link>;
                            // })
                        }
                        {location.pathname !== '/login' && (
                            <button onClick={handleLogout} className={styles.logout_btn}>
                                Đăng xuất
                            </button>
                        )}
                    </>
                )}
                {!user && (
                    <Link to="/login" className={location.pathname === '/login' ? 'sidebar_active' : ''}>
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default SideBar;
