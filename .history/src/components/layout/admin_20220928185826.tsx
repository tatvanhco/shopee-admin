import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export interface AdminLayoutProps {}

export const AdminLayout = () => {
    const navigation = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        navigation('/login');
    };
    return (
        <div>
            <h1>admin layout</h1>
            <button onClick={logout}>Đăng xuất</button>
            <S
        </div>
    );
};
