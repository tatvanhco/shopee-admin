// import clsx from 'clsx';
import * as React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow,} from '@mui/material'
import styles from './datatable.module.scss';
// import { Link } from 'react-router-dom';
// import BorderColorIcon from '@mui/icons-material/BorderColor';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import { EmployeeCol, Employees } from './datatablesoure';

export interface DataTableProps {}

export const Datatable = () => {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('calories');
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    return (
        <div className={styles.data_table}>
            {/* <table className={clsx(styles.table, 'table-fixed', 'border', 'border-collapse', 'border-slate-300')}>
                <thead>
                    <tr>
                        {EmployeeCol.map((colNV) => (
                            <th key={colNV.name} className={clsx('border', 'border-slate-300', 'text-center', 'py-4')}>
                                {colNV.colName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Employees.map((Employee) => (
                        <>
                            <tr key={Employee.id}>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {Employee.id}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {Employee.employeeName}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {Employee.employId}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {Employee.email}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {Employee.pass}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    {Employee.sdt}
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    <span
                                        className={clsx(
                                            styles.status,
                                            `${Employee.status == 'active' ? styles.active : styles.passive}`,
                                        )}
                                    >
                                        {Employee.status}
                                    </span>
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    <Link to="/admin/emloyeeManager">
                                        <BorderColorIcon className={styles.fixBtn} />
                                    </Link>
                                </td>
                                <td className={clsx('border', 'border-slate-300', 'text-center', 'py-3')}>
                                    <DeleteOutlineOutlinedIcon className={styles.deleteBtn} />
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table> */}
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <EnhancedTableToolbar numSelected={selected.length} />
                    <TableContainer>
                        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.sort(getComparator(order, orderBy)).slice() */}
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row.name);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.name)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.name}
                                                selected={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell component="th" id={labelId} scope="row" padding="none">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                <FormControlLabel
                    control={<Switch checked={dense} onChange={handleChangeDense} />}
                    label="Dense padding"
                />
            </Box>
        </div>
    );
};
