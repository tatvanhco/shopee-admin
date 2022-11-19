import { Box, Button, Modal } from '@mui/material';
import clsx from 'clsx';
import { Datatable } from 'features/pages/datatable/datatable';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './emloyeeManager.module.scss';

export interface emloyeeManagerProps {}

export const EmloyeeManager = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.employee_table}>
            <div className={clsx('flex', 'justify-between', 'mb-4', 'px-5')}>
                <h1 className={clsx(styles.title, 'font-bold')}>Quản lý nhân viên</h1>

                <div className={styles.employee_btn}>
                    <Button className={styles.addEmployee_btn} onClick={handleOpen} variant="contained">
                        Thêm nhân viên
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box className=''={clsx(styles.add_Employee_modal)}>
                            <h2 id="parent-modal-title">Text in a modal</h2>
                            <p id="parent-modal-description">
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </p>
                            {/* <ChildModal /> */}
                        </Box>
                    </Modal>
                </div>
            </div>

            <Datatable />
        </div>
    );
};
