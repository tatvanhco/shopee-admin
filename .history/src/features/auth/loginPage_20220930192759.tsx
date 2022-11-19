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
            <form method="POST">
                <h2>SHOPPER</h2>
                <h3>Welcome Back!</h3>
                <p>Please loging to continue!</p>
                <div className="from_group">
                    <label>Email:</label>
                    <input id="full_name" name="" type="text"/>
                </div>
                <div className="from_group"></div>
            </form>
            {/* <h2>Welcome to login page! </h2>
            <p>Please loging to continue</p>
            <button onClick={login}> Login</button> */}
        </div>
    );
}
