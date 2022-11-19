import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './pages.module.scss';

export default function LoginPage() {
    const navigate = useNavigate();
    const handleLogin = () => {
        localStorage.setItem('user', JSON.stringify({ role: 'Admin' }));
        navigate('/dashboard');
    };
    return (
        <div className={styles.Login_from}>
            <div>Welcome Admin</div>
            <div>please Login to continue</div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
