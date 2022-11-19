import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import MianRouter from 'routes/mainrouter';
import SideBar from './Sidebar';
import styles from './layout.module.scss';

export const AdminLayout = () => {
    return (
        <div className={styles.container}>
            {/* <SideBar />

            <div className={'warpper'}>
                <div className={'App__Content'}>
                    <MianRouter />
                </div>
            </div> */}
        </div>
    );
};
