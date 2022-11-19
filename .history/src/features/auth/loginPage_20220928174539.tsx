import styles from './pages.module.scss';

export interface LoginPageProps {}
export default function LoginPage(props: LoginPageProps) {
    return <div className={styles.Login_from}>{/* <button onClick={handleLogin}>Login</button> */}</div>;
}
