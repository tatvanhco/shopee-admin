import * as React from 'react';

const productManager = () => {
    return <h2>This is product Manager</h2>;
};

export default productManager;

import * as React from 'react';

export interface productManagerProps {}

export function productManager(props: productManagerProps) {
    return <div>This is Manage Orders</div>;
}
