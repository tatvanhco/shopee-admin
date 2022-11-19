import * as React from 'react';

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
