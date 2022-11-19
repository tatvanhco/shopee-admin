import * as React from 'react';
import styles from './datatable.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { CatalogCol, Catalogs, EmployeeCol, Employees } from './datatablesoure';

export const Datatable = (props: any) => {
    let db: any;

    switch (props.dataTable) {
        case 'emloyeeManager':
            db = {
                col: EmployeeCol,
                row: Employees,
            };
            break;
        case 'catalogManager':
            db = {
                col: CatalogCol,
                row: Catalogs,
            };
            break;
        case 'customerManager':
            db = {
                col: EmployeeCol,
                row: Employees,
            };
            break;
        case 'inventoryManagement':
            db = {
                col: EmployeeCol,
                row: Employees,
            };
            break;
        case 'ManageOrders':
            db = {
                col: EmployeeCol,
                row: Employees,
            };
            break;
        case 'productManager':
            db = {
                col: EmployeeCol,
                row: Employees,
            };
            break;
        default:
            break;
    }

    return (
        <div className={styles.data_table}>
            <DataGrid rows={db.row} columns={db.col} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    );
};
