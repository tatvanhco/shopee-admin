export const EmployeeCol: GridEmployeeCol[] = [
    { field: 'stt', headerName: 'STT', width: 70 },
    { field: 'TenNV', headerName: 'Tên nhân viên', width: 130 },
    { field: 'manv', headerName: 'Mã nhân  vien', width: 130 },
    {
        field: 'email',
        headerName: 'Email',
        type: 'number',
        width: 90,
    },
    {
        field: 'Pass',
        headerName: 'PassWord',
        type: 'number',
        width: 90,
    },
    {
        field: 'sdt',
        headerName: 'Số điện thoại',
        type: 'number',
        width: 90,
    },
    // {
    //     field: 'UpdateNV',
    //     headerName: 'Sửa',
    //     type: 'number',
    //     width: 90,
    // },
    // {
    //     field: 'DelNV',
    //     headerName: 'Xóa',
    //     type: 'number',
    //     width: 90,
    // },
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
