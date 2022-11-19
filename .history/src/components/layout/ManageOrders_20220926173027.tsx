import * as React from 'react';

const ManageOrders = () => {
    return <h2>This is Manage Orders</h2>;
};

export default ManageOrders;

import * as React from 'react';

export interface ManageOrdersProps {}

export function ManageOrders(props: ManageOrdersProps) {
    return <div>This is inventory Management</div>;
}
