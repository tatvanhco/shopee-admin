import { Outlet } from 'react-router-dom';

const InnerContent = () => {
    return (
        <div className="inner-content">
            <Outlet />
        </div>
    );
};

export default InnerContent;

import * as React from 'react';

export interface emloyeeManagerProps {}

export function emloyeeManager(props: emloyeeManagerProps) {
    return <div>This is emloyee Manager</div>;
}

