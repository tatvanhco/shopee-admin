import { GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";

export const EmployeeCol = [
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
        renderCell: (params: GridCellParams) => {
            return (
                <React.ReactNode>
                <div className="styles.status">
                    {params.row.}
                </div>
                
                </React.ReactNode>
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
