import * as React from 'react';
import SideBar from './Sidebar';

export interface AdminLayoutProps {}

export function AdminLayout(props: AdminLayoutProps) {
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
