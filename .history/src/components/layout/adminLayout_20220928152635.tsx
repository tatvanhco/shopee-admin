import * as React from 'react';
import MainRouter from 'routes/mainRouter';
import SideBar from './Sidebar';

export interface AdminLayoutProps {}

export const AdminLayout = (props: AdminLayoutProps) {
    return (
        <div>
            <SideBar />

            <div className="App__Content">
                <div className="warpper">
                    <MainRouter />
                </div>
            </div>
        </div>
    );
}
