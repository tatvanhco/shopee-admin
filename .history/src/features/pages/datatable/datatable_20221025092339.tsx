import * as React from 'react';
import styles from './datatable.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { EmployeeCol, Employees } from './datatablesoure';

export const Datatable = (props: any) => {
    let db: ant

    switch (props.dataTable) {
        case "emloyeeManager": 
    }

    return (
        <div className={styles.data_table}>
            <DataGrid rows={Employees} columns={EmployeeCol} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    );
};
