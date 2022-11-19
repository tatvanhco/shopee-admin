import * as React from 'react';
import SideBar from './Sidebar';
import styles from './layout.module.scss';

export const AdminLayout = () => {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.warpper}>
                <div className={styles.App__Content}>
                    {/* <Routes>
                        {publicRoute.map((route, index) => {
                            const page: string = route.component;
                            return <Route key={index} path={route.path} element={page />} />;
                        })}
                    </Routes> */}
                </div>
            </div>
        </div>
    );
};
