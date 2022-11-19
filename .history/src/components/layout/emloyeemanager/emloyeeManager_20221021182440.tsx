import { Box, Button, Modal } from '@mui/material';
import clsx from 'clsx';
import { Datatable } from 'features/pages/datatable/datatable';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
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
                        <Box className={clsx(styles.add_Employee_modal)}>
                            <div
                                className={clsx(
                                    styles.add_Employee_modal_header,
                                    'flex',
                                    'justify-between',
                                    'px-5',
                                    'py-2',
                                )}
                            >
                                <h2 className={clsx('font-semibold', 'text-lg')} id="parent-modal-title">
                                    Thêm nhân viên
                                </h2>
                                <CloseIcon onClick={handleClose} />
                            </div>
                            <div className={clsx(styles.add_Employee_modal_content, 'px-5', 'py-2')}>
                                <form method="POST">
                                    <div className={styles.add_Employee_modal_groups}>
                                        <div className={styles.add_Employee_modal_group}>
                                            <label htmlFor="email" className={styles.from_label}>
                                                Email:
                                            </label>
                                            <input
                                                id="full_name"
                                                name="email"
                                                type="text"
                                                placeholder="example@gmail.com"
                                                className={styles.add_Employee_modal_group}
                                            />
                                        </div>
                                        <div className={styles.add_Employee_modal_group}>
                                            <label htmlFor="password" className={styles.from_label}>
                                                Password:
                                            </label>
                                            <input
                                                id="full_name"
                                                name="password"
                                                type="password"
                                                placeholder="Nhập mật khẩu"
                                                className={styles.from_control}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={clsx(styles.add_Employee_modal_footer, 'px-5', 'py-2')}>
                                <div className="float-right mb-3">
                                    <Button
                                        className={clsx(styles.save_btn, 'mr-3')}
                                        onClick={handleOpen}
                                        variant="contained"
                                    >
                                        Lưu thay đổi
                                    </Button>
                                    <Button className={styles.close_btn} onClick={handleClose} variant="contained">
                                        Đóng
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>

            <Datatable />
        </div>
    );
};
