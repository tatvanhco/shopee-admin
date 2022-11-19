import * as React from 'react';

export interface AdminLayoutProps {}

export const AdminLayout = () => {
    const navigation = useNavigate()

	const logout = () => {
		localStorage.removeItem("user")
		navigation("/login")
	}
    return (
        <div>
            <h1>admin layout</h1>
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
};
