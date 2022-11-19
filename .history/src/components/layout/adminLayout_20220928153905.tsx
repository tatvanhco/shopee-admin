import * as React from 'react';
import MainRouter from 'routes/mainRouter';
import SideBar from './Sidebar';

export interface AdminLayoutProps {}

export const AdminLayout = () => {
    return (
        <div>
            <h1>admin layout</h1>
            {/* <SideBar />
            <div className="App__Content">
                <div className="warpper">
                    <MainRouter />
                </div>
            </div> */}
        </div>
    );
};
