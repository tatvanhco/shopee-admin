import * as React from 'react';

export default function LoginPage(props: LoginPageProps) {
    return (
        <>
            <div>Welcome Admin</div>
            <div>please Login to continue</div>
            <button onClick={handleLogin}></button>
        </>
    );
}
