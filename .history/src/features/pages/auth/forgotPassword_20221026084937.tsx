import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './auth.module.scss';
export const ForgotPassword = () => {
    return (
        <div className={styles.from_forgot}>
            <form className={styles.fogot} method="POST">
                <h2 className={styles.fogot_logo}>SHOPPER</h2>
                <p className={styles.fogot_desc}>Please loging to continue!</p>
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
                <button className={styles.submit_btn}>Đăng nhập</button>
                <div className={clsx(styles.forgotpass, 'mt-9', 'font-bold')}>
                    <Link to="/forgotpassword">Forgot password?</Link>
                </div>
            </form>
        </div>
    );
};
