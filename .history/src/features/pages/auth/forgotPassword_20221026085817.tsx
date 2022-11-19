import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './auth.module.scss';
export const ForgotPassword = () => {
    return (
        <div className={styles.from_forgot}>
            <form className={styles.fogot} method="POST">
                <h2 className={styles.fogot_logo}>SHOPPER</h2>
                <p className={styles.fogot_desc}>Vui lòng nhập Email của bạn</p>
                <div className={styles.from_groups}>
                    <div className={styles.from_group}>
                        <label htmlFor="email" className={styles.from_label}>
                            Email:
                        </label>
                        <input
                            id="full_name"
                            name="email"
                            type="email"
                            placeholder="example@gmail.com"
                            className={styles.from_control}
                        />
                    </div>
                </div>
                <button onClick={handle} className={styles.submit_btn}>Gửi mã</button>
                <div className={clsx(styles.forgotpass, 'mt-9', 'font-bold')}>
                    <Link to="/login">Quay về trang đăng nhập</Link>
                </div>
            </form>
        </div>
    );
};
