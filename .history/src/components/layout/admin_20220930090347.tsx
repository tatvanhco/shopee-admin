import SideBar from './Sidebar';
import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
    return (
        <div className={styles.container}>
            <SideBar />
            <Outlet></

            {/* <MianRouter /> */}

            {/* <div className={'warpper'}>
                <div className={'App__Content'}></div>
            </div> */}
        </div>
    );
};
