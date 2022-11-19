import * as React from 'react';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
    const navigate = useNavigate();
    const handleLogin = () => {
          localStorage.setItem("user" , JSON.stringify({role: "Admin"}))
          navigate("")
    }
    return (
        <>
            <div>Welcome Admin</div>
            <div>please Login to continue</div>
            <button onClick={handleLogin}></button>
        </>
    );
}
