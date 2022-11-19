import * as React from 'react';

export interface AdminLayoutProps {}

export const AdminLayout = (props: AdminLayoutProps) => {
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
        <div>
            <h1>admin layout</h1>
            <button onClick={handleLogout} className={styles.logout_btn}>
                Đăng xuất
            </button>
        </div>
    );
};
