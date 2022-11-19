import styles from './auth.module.scss';

import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem('user', JSON.stringify({ role: 'ADMIN' }));
        navigate('/admin/dashboard');
    };

    return (
        <div className={styles.login_from}>
            <form className={styles.login} method="POST">
                <h2 className={styles.login_logo}>SHOPPER</h2>
                <h3 className={styles.login_title}>Welcome Back!</h3>
                <p className={styles.login_desc}>Please loging to continue!</p>
                <div className={styles.from_groups}>
                    <div className={styles.from_group}>
                        <label htmlFor="email" className={styles.from_label}>
                            Email:
                        </label>
                        <input
                            id="full_name"
                            name="email"
                            type="text"
                            placeholder="example@gmail.com"
                            className={styles.from_control}
                        />
                    </div>
                    <div className={styles.from_group}>
                        <label htmlFor="password" className={styles.from_label}>
                            Password:
                        </label>
                        <input
                            id="full_name"
                            name="password"
                            type="password"
                            placeholder="Nhập mật khẩu"
                            className={styles.from_control}
                        />
                    </div>
                </div>
                <button onClick={login} className={styles.submit_btn}>
                    Đăng nhập
                </button>
                <Link to="/forgotpass"></Link>
            </form>
        </div>
    );
}
