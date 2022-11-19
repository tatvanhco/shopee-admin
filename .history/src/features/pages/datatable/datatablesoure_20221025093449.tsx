import { Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styles from './datatable.module.scss';
import clsx from 'clsx';
import React from 'react';

export const EmployeeCol: GridColDef[] = [
    { field: 'id', headerName: 'STT', width: 70 },
    { field: 'employeeName', headerName: 'Tên nhân viên', width: 230 },
    { field: 'employId', headerName: 'Mã nhân viên', width: 170 },
    { field: 'email', headerName: 'Email', width: 230 },
    {
        field: 'pass',
        headerName: 'PassWord',
        type: 'number',
        width: 170,
    },
    {
        field: 'sdt',
        headerName: 'Số điện thoại',
        type: 'number',
        width: 230,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        sortable: false,
        renderCell: (params) => {
            return (
                <div
                    className={clsx(styles.status, `${params.row.status == 'active' ? styles.active : styles.passive}`)}
                >
                    {params.row.status}
                </div>
            );
        },
    },
    {
        field: 'edit',
        headerName: 'Sửa',
        sortable: false,
        width: 130,
        renderCell: () => {
            return (
                <Button className={styles.fixBtn} variant="contained" startIcon={<EditIcon />}>
                    Edit
                </Button>
            );
        },
    },
    {
        field: 'delete',
        headerName: 'Xóa',
        sortable: false,
        width: 130,
        renderCell: () => {
            return (
                <Button className={styles.deleteBtn} variant="contained" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            );
        },
    },
];

export const Employees = [
    {
        id: 1,
        employeeName: 'Tất Vành Cơ',
        employId: '001',
        email: 'vanhco@gmail.com',
        pass: '123456',
        sdt: '0900651615',
        status: 'active',
    },
    {
        id: 2,
        employeeName: 'Tất Vành Cơ 1',
        employId: '002',
        email: 'vanhco2@gmail.com',
        pass: '123456',
        sdt: '0900651515',
        status: 'passive',
    },
    {
        id: 3,
        employeeName: 'Tất Vành Cơ 2',
        employId: '003',
        email: 'vanhco3@gmail.com',
        pass: '123456',
        sdt: '0900651515',
        status: 'active',
    },
];

export const CatalogCol: GridColDef[] = [
    { field: 'id', headerName: 'STT', width: 70 },
    { field: 'catalogName', headerName: 'Tên danh mục', width: 230 },
    { field: 'catalogId', headerName: 'Mã dnah mục', width: 170 },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        sortable: false,
        renderCell: (params) => {
            return (
                <div
                    className={clsx(styles.status, `${params.row.status == 'active' ? styles.active : styles.passive}`)}
                >
                    {params.row.status}
                </div>
            );
        },
    },
    {
        field: 'edit',
        headerName: 'Sửa',
        sortable: false,
        width: 130,
        renderCell: () => {
            return (
                <Button className={styles.fixBtn} variant="contained" startIcon={<EditIcon />}>
                    Edit
                </Button>
            );
        },
    },
    {
        field: 'delete',
        headerName: 'Xóa',
        sortable: false,
        width: 130,
        renderCell: () => {
            return (
                <Button className={styles.deleteBtn} variant="contained" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            );
        },
    },
];

export const Catalogs = [
    {
        id: 1,
        catalogName: 'danh mục 1',
        catalogId: '101',
        status: 'active',
    },
    {
        id: 2,
        catalogName: 'danh mục 2',
        catalogId: '102',
        status: 'active',
    },
    {
        id: 3,
        catalogName: 'danh mục 3',
        catalogId: '103',
        status: 'active',
    },
];
