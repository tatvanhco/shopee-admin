import * as React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return <div className="SideBar">
        <div className="sideBar__items">
            <Link to="/dashboard" className={location.pathname==='/dashboar'}/>
        </div>

    </div>;
};

export default SideBar;
