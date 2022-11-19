import clsx from 'clsx';
import React, { useEffect } from 'react';
import styles from './datatable.module.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { EmployeeCol, Employees } from './datatablesoure';

export interface DataTableProps {}

export const Datatable = () => {
    return (
        <div className={styles.data_table}>
            
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={Employees}
                    columns={EmployeeCol}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    // checkboxSelection
                />
            </div>
        </div>
    );
};
