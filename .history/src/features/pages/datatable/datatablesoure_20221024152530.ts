const headCells: readonly HeadCell[]:any = [
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

export const EmployeeCol = [
    {
        name: 'stt',
        colName: 'STT',
    },
    {
        name: 'TenNV',
        colName: 'Tên nhân viên',
    },
    {
        name: 'manv',
        colName: 'Mã nhân viên',
    },
    {
        name: 'email',
        colName: 'Email',
    },
    {
        name: 'Pass',
        colName: 'PassWord',
    },
    {
        name: 'sdt',
        colName: 'Số điện thoại',
    },
    {
        name: 'status',
        colName: 'Status',
    },
    {
        name: 'UpdateNV',
        colName: 'Sửa',
    },
    {
        name: 'DelNV',
        colName: 'Xóa',
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
