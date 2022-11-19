import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import MianRouter from 'routes/mainrouter';
import SideBar from './Sidebar';
import styles from './layout.module.scss';
import { InnerContent } from './Innercontext';

export const AdminLayout = () => {
    return (
        <div className={styles.container}>
            <div className="side_bar">
                <SideBar />
            </div>
            <div className={'warpper'}>
                <div className={'App__Content'}>
                    <Route path="/admin" element={<InnerContent />}>
                        <Route path="/" element={<Navigate replace to="admin" />} />
                        <Route path=''
                        <MianRouter />
                    </Route>
                </div>
            </div>
        </div>
    );
};
