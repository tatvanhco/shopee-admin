// import clsx from 'clsx';
import * as React from 'react';
import {
    Box,
    Checkbox,
    FormControlLabel,
    Paper,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
} from '@mui/material';
import styles from './datatable.module.scss';
import { EnhancedTableToolbar } from './EnhancedTableToolbar';
import { EnhancedTableHead } from './datatablehead';
// import { rows } from './datatablesoure';
import { DataGrid } from '@mui/x-data-grid';
import { EmployeeCol, Employees } from './datatablesoure';



export const Datatable = () => {
    
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
            {/* <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
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
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row.employeeName);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.employeeName)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.stt}
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
                                                    {row.stt}
                                                </TableCell>
                                                <TableCell align="right">{row.employeeName}</TableCell>
                                                <TableCell align="right">{row.employId}</TableCell>
                                                <TableCell align="right">{row.email}</TableCell>
                                                <TableCell align="right">{row.pass}</TableCell>
                                                <TableCell align="right">{row.sdt}</TableCell>
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
            </Box> */}
            <DataGrid rows={Employees} columns={EmployeeCol} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    );
};
