import SideBar from './Sidebar';
import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Statistical } from './statistical';
import MianRouter from 'routes/mainrouter';

export const AdminLayout = () => {
    return (
        <div className={styles.container}>
            {/* <SideBar /> */}
            {/* <SideBar /> */}
            {/* <Outlet> */}
            {/* <Statistical /> */}
            {/* </Outlet> */}
            {/* <MianRouter /> */}
            {/* <div className={'warpper'}>
                <div className={'App__Content'}></div>
            </div> */}
            <MianRouter />
        </div>
    );
};
