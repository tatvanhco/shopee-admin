import { Outlet, Route, Routes } from 'react-router-dom';
import MianRouter from 'routes/mainrouter';
import SideBar from './Sidebar';

export const AdminLayout = () => {
    return (
        <div className={'container'}>
            <SideBar />
            <Outlet/>
            <div className={'warpper'}>
                <div className={'App__Content'}>
                    <
                    <MianRouter />
                </div>
            </div>
        </div>
    );
};
