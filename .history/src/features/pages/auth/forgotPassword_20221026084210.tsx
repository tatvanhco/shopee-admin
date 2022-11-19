import clsx from 'clsx';
import styles from './auth.module.scss';
export const ForgotPassword = () => {
    return (
        <div className={styles.from}>
            <form className={styles.from_child} method="POST">
                <h2 className={styles.from_logo}>SHOPPER</h2>
                <h3 className={styles.from_title}>Welcome Back!</h3>
                <p className={styles.from_desc}>Please loging to continue!</p>
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
                <button className={styles.submit_btn}>
                    Đăng nhập
                </button>
                <div className={clsx(styles.forgotpass, 'mt-9', 'font-bold')}>
                    <Link to="/forgotpassword">Forgot password?</Link>
                </div>
            </form>
        </div>
    );
};
