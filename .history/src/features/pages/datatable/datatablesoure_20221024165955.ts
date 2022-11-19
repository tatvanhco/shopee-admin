interface Data {
    stt: number;
    employeeName: string;
    employId: number;
    email: string;
    pass: number;
    sdt: number;
}
interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
    {
        id: 'stt',
        numeric: false,
        disablePadding: true,
        label: 'STT',
    },
    {
        id: 'employeeName',
        numeric: true,
        disablePadding: false,
        label: 'Tên nhân viên',
    },
    {
        id: 'employId',
        numeric: true,
        disablePadding: false,
        label: 'Mã nhân viên',
    },
    {
        id: 'email',
        numeric: true,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'pass',
        numeric: true,
        disablePadding: false,
        label: 'PassWord',
    },
    {
        id: 'sdt',
        numeric: true,
        disablePadding: false,
        label: 'Số điện thoại',
    },
];

function createData(
    stt: number,
    employeeName: string,
    employId: number,
    email: string,
    pass: number,
    sdt: number,
): Data {
    return {
        stt,
        employeeName,
        employId,
        email,
        pass,
        sdt,
    };
}

export const rows = [
    createData(1, 'tất Vành cơ', 111, 'vanhco@gmail.com', 123456, 0900651515),
    createData(2, 'tất Vành cơ 1', 112, 'vanhco@gmail.com', 123456, 0900651514),
    createData(3, 'tất Vành cơ 2', 113, 'vanhco@gmail.com', 123456, 0900651565),
    createData(4, 'tất Vành cơ 3', 114, 'vanhco@gmail.com', 123456, 0900651585),
    createData(5, 'tất Vành cơ 4', 115, 'vanhco@gmail.com', 123456, 0900651515),
    createData(6, 'tất Vành cơ 5', 116, 'vanhco@gmail.com', 123456, 0900651515),
    createData(7, 'tất Vành cơ 6', 117, 'vanhco@gmail.com', 123456, 0900651515),
    createData(8, 'tất Vành cơ 7', 118, 'vanhco@gmail.com', 123456, 0900651515),
    createData(9, 'tất Vành cơ 8', 119, 'vanhco@gmail.com', 123456, 0900651515),
    createData(10, 'tất Vành cơ 9', 1110, 'vanhco@gmail.com', 123456, 0900651515),
    createData(11, 'tất Vành cơ 10', 1111, 'vanhco@gmail.com', 123456, 0900651515),
    createData(12, 'tất Vành cơ 11', 1112, 'vanhco@gmail.com', 123456, 0900651515),
];

// export const EmployeeCol = [
//     {
//         name: 'stt',
//         colName: 'STT',
//     },
//     {
//         name: 'TenNV',
//         colName: 'Tên nhân viên',
//     },
//     {
//         name: 'manv',
//         colName: 'Mã nhân viên',
//     },
//     {
//         name: 'email',
//         colName: 'Email',
//     },
//     {
//         name: 'Pass',
//         colName: 'PassWord',
//     },
//     {
//         name: 'sdt',
//         colName: 'Số điện thoại',
//     },
//     {
//         name: 'status',
//         colName: 'Status',
//     },
//     {
//         name: 'UpdateNV',
//         colName: 'Sửa',
//     },
//     {
//         name: 'DelNV',
//         colName: 'Xóa',
//     },
// ];

// export const Employees = [
//     {
//         id: 1,
//         employeeName: 'Tất Vành Cơ',
//         employId: '001',
//         email: 'vanhco@gmail.com',
//         pass: '123456',
//         sdt: '0900651615',
//         status: 'active',
//     },
//     {
//         id: 2,
//         employeeName: 'Tất Vành Cơ 1',
//         employId: '002',
//         email: 'vanhco2@gmail.com',
//         pass: '123456',
//         sdt: '0900651515',
//         status: 'passive',
//     },
//     {
//         id: 3,
//         employeeName: 'Tất Vành Cơ 2',
//         employId: '003',
//         email: 'vanhco3@gmail.com',
//         pass: '123456',
//         sdt: '0900651515',
//         status: 'active',
//     },
// ];
