import * as React from 'react';

const productManager = () => {
    return <h2>This is product Manager</h2>;
};

export default productManager;

import * as React from 'react';

export interface ManageOrdersProps {}

export function ManageOrders(props: ManageOrdersProps) {
    return <div>This is Manage Orders</div>;
}
