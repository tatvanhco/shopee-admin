import { Outlet, Route, Routes } from 'react-router-dom';
import MianRouter from 'routes/mainrouter';
import SideBar from './Sidebar';

export const AdminLayout = () => {
    return (
        <div className={'container'}>
            <div className="side_bar">
                
            </div>
            <SideBar />
            <div className={'warpper'}>
                <div className={'App__Content'}>
                    <MianRouter />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
