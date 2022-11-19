import { Outlet } from 'react-router-dom';

export const InnerContent = () => {
    return (
        <div>
            <div className="inner-content">
                <Outlet />
            </div>
        </div>
    );
};
