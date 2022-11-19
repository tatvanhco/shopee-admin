import * as React from 'react';

const dashboard = () => {
    return <h2>This is dashboard</h2>;
};

export default dashboard;


import * as React from 'react';

export interface dashboardProps {}

export function dashboard(props: dashboardProps) {
    return <div>This is catalog Manager</div>;
}
