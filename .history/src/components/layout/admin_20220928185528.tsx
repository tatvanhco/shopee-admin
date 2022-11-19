import * as React from 'react';

export interface AdminLayoutProps {}

export const AdminLayout = () => {

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
            <button onClick={handleLogout} >
                Đăng xuất
            </button>
        </div>
    );
};
