import SideBar from './Sidebar';
import styles from './layout.module.scss';

export const AdminLayout = () => {
    return (
        <div className={styles.container}>
            <SideBar />
            

            {/* <MianRouter /> */}

            {/* <div className={'warpper'}>
                <div className={'App__Content'}></div>
            </div> */}
        </div>
    );
};
