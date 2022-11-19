interface Data {
    // calories: number;
    // carbs: number;
    // fat: number;
    // name: string;
    // protein: number;
    // id: 1,
    stt: number
    employeeName: string;
    employId: number,
    email: string,
    pass: number,
    sdt: number,
    // status: 'active',
}
interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
    },
];

function createData(
    employeeName: string,
    employId: number,
    email: string,
    pass: number,
    sdt: number,
  ): Data {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
    };
  }

export const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
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
