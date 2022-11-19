import styles from './pages.module.scss';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
    localStorage.setItem('user','test')
    navigate('/dashboard')
  }


  return <div className='login'>
      <h2>Welcome to login page! </h2>
      <p>Please loging to continue</p>
      <button onClick={login}> Login</button>
  </div>;
}
