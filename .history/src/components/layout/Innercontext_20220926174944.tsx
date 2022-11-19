import { Outlet } from 'react-router-dom';

import * as React from 'react';

export default const InnerContent =() =>{
    return (
        <div>
            <div className="inner-content">
                <Outlet />
            </div>
        </div>
    );
}
