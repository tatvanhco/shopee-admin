import clsx from 'clsx';
import React, { useEffect } from 'react';
import styles from './datatable.module.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Employees } from './datatablesoure';

const EmployeeCol = [
    { field: 'id', headerName: 'STT', width: 70 },
    { field: 'employeeName', headerName: 'Tên nhân viên', width: 130 },
    { field: 'employId', headerName: 'Mã nhân viên', width: 100 },
    {
        field: 'email',
        headerName: 'Email',
        type: 'number',
        width: 180,
    },
    {
        field: 'pass',
        headerName: 'PassWord',
        type: 'number',
        width: 100,
    },
    {
        field: 'sdt',
        headerName: 'Số điện thoại',
        type: 'number',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 100,
        renderCell: (params: any) => {
            return (
                <span
                    className={clsx(styles.status, `${params.row.status == 'active' ? styles.active : styles.passive}`)}
                >
                    {params.row.status}
                </span>
            );
        },
    },
];

export interface DataTableProps {}

export const Datatable = () => {
    return (
        <div className={styles.data_table}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={Employees}
                    columns={EmployeeCol}
                    // pageSize={5}
                    rowsPerPageOptions={[5]}
                    // checkboxSelection
                />
            </div>
        </div>
    );
};