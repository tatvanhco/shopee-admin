import { Outlet, Route, Routes } from 'react-router-dom';
import MianRouter from 'routes/mainrouter';
import SideBar from './Sidebar';
import.sty

export const AdminLayout = () => {
    return (
        <div className={'container'}>
            <div className="side_bar">
                <SideBar />
            </div>
            <div className={'warpper'}>
                <div className={'App__Content'}>
                    <MianRouter />
                </div>
            </div>
        </div>
    );
};
