import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const EmployeeCol = [
    // { field: 'stt', headerName: 'STT', width: 70 },
    // { field: 'TenNV', headerName: 'Tên nhân viên', width: 130 },
    // { field: 'manv', headerName: 'Mã nhân  vien', width: 130 },
    // {
    //     field: 'email',
    //     headerName: 'Email',
    //     type: 'number',
    //     width: 90,
    // },
    // {
    //     field: 'Pass',
    //     headerName: 'PassWord',
    //     type: 'number',
    //     width: 90,
    // },
    // {
    //     field: 'sdt',
    //     headerName: 'Số điện thoại',
    //     type: 'number',
    //     width: 90,
    // },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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
