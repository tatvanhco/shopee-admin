import styles from './pages.module.scss';

import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem('user', JSON.stringify({ role: 'ADMIN' }));
        navigate('/admin');
    };

    return (
        <div className={styles.login_from}>
            <form className={styles.login} method="POST">
                <h2 className={styles.login_logo}>SHOPPER</h2>
                <h3 className={styles.login_title}>Welcome Back!</h3>
                <p className={styles.login_desc}>Please loging to continue!</p>
                <div className={styles.from_groups}>
                    <div className={styles.from_group}>
                        <label htmlFor="email">Email:</label>
                        <input id="full_name" name="email" type="text" placeholder="example@gmail.com"  className={styles.from_control}/>
                    </div>
                    <div className={styles.from_group}>
                        <label htmlFor="password">Password:</label>
                        <input id="full_name" name="password" type="password" placeholder="Nhập mật khẩu" />
                    </div>
                </div>
                <button onClick={login}> Login</button>
            </form>
        </div>
    );
}
