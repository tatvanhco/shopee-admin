import * as React from 'react';

export interface inventoryManagementProps {}

export const InventoryManagement = (props: inventoryManagementProps) => {
    const [openAddEmployee, setOpenAddEmployee] = React.useState(false);
    const handleOpenAddEmployee = () => {
        setOpenAddEmployee(true);
    };
    const handleCloseAddEmployee = () => {
        setOpenAddEmployee(false);
    };

    return (

    );
    }

        
        
