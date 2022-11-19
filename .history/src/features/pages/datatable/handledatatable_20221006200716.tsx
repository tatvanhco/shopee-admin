import * as React from 'react';

export interface ManageOrdersProps {}

export const ManageOrders = () => {
    return (
        <>
            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                <Link to="/admin/emloyeeManager">
                    <BorderColorIcon className={styles.fixBtn} />
                </Link>
            </td>
            <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                <DeleteOutlineOutlinedIcon onClick={() => handleDelete(params)} className={styles.deleteBtn} />
            </td>
        </>
    );
};
