import styles from './pages.module.scss';

export interface LoginPageProps {}

import {useNavigate } from 'react-router-dom';
	

	const  Login=() =>{
        localStorage.setItem('user','test')
    navigate('/dashboard')
    }
	

	  

export default function LoginPage(props: LoginPageProps) {
    
  }


  return <div className='login'>
      <h2>Welcome to login page! </h2>
      <p>Please loging to continue</p>
      <button onClick={login}> Login</button>
  </div>;
}
