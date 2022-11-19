import styles from './pages.module.scss';

import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem('user', JSON.stringify({ role: 'ADMIN' }));
        navigate('/admin');
    };

    return (
        <div className="login">
            <f
            {/* <h2>Welcome to login page! </h2>
            <p>Please loging to continue</p>
            <button onClick={login}> Login</button> */}
        </div>
    );
}
