



export const EnhancedTableHead = (props: EnhancedTableProps) => {
    

    return (
        // <TableHead>
        //     <TableRow>
        //         <TableCell padding="checkbox">
        //             <Checkbox
        //                 color="primary"
        //                 indeterminate={numSelected > 0 && numSelected < rowCount}
        //                 checked={rowCount > 0 && numSelected === rowCount}
        //                 onChange={onSelectAllClick}
        //                 inputProps={{
        //                     'aria-label': 'select all desserts',
        //                 }}
        //             />
        //         </TableCell>
        //         {headCells.map((headCell) => (
        //             <TableCell
        //                 key={headCell.id}
        //                 align={headCell.numeric ? 'right' : 'left'}
        //                 padding={headCell.disablePadding ? 'none' : 'normal'}
        //                 sortDirection={orderBy === headCell.id ? order : false}
        //             >
        //                 <TableSortLabel
        //                     active={orderBy === headCell.id}
        //                     direction={orderBy === headCell.id ? order : 'asc'}
        //                     // onClick={createSortHandler(headCell.id)}
        //                 >
        //                     {headCell.label}
        //                     {orderBy === headCell.id ? (
        //                         <Box component="span" sx={visuallyHidden}>
        //                             {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
        //                         </Box>
        //                     ) : null}
        //                 </TableSortLabel>
        //             </TableCell>
        //         ))}
        //     </TableRow>
        // </TableHead>
    );
};