import { Box, Button, Modal } from '@mui/material';
import clsx from 'clsx';
import { Datatable } from 'features/pages/datatable/datatable';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../publicStyleLayout.scss';

export const CustomerManager = () => {
    const [openAddModal, setOpenAddModal] = React.useState(false);
    const handleOpenAddModal = () => {
        setOpenAddModal(true);
    };
    const handleCloseAddModal = () => {
        setOpenAddModal(false);
    };

    return (
        <div className="w-full">
            <div className={clsx('flex', 'justify-between', 'mb-4', 'px-5')}>
                <h1 className={clsx('title', 'font-bold')}>Quản lý khách hàng</h1>
                <div>
                    <Button className="add_btn" onClick={handleOpenAddModal} variant="contained">
                        Thêm nhân viên
                    </Button>
                    <Modal
                        open={openAddModal}
                        onClose={handleCloseAddModal}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box className="add_modal">
                            <div className={clsx('add_modal_header', 'flex', 'px-5', 'mt-4', 'justify-center')}>
                                <h2 className={clsx('font-semibold', 'text-2xl')} id="parent-modal-title">
                                    Thêm nhân viên
                                </h2>
                                <CloseIcon className="close_icon" onClick={handleCloseAddModal} />
                            </div>
                            <div className={clsx('add_modal_content', 'px-16', 'py-2')}>
                                <form method="POST">
                                    <div className="add_modal_groups">
                                        <div className="add_modal_group">
                                            <label htmlFor="EmployeeName" className="add_modal_label">
                                                Nhập tên nhân viên:
                                            </label>
                                            <input
                                                id="EmployeeName"
                                                name="EmployeeName"
                                                type="text"
                                                placeholder="Nhập tên nhân viên"
                                                className="add_modal_control"
                                            />
                                        </div>
                                        <div className="add_modal_group">
                                            <label htmlFor="EmployeeId" className="add_modal_label">
                                                Nhập mã nhân viên:
                                            </label>
                                            <input
                                                id="EmployeeId"
                                                name="EmployeeId"
                                                type="text"
                                                placeholder="Nhập mã nhân viên"
                                                className="add_modal_control"
                                            />
                                        </div>
                                        <div className="add_modal_group">
                                            <label htmlFor="email" className="add_modal_label">
                                                Nhập Email:
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="text"
                                                placeholder="Nhập Email"
                                                className="add_modal_control"
                                            />
                                        </div>
                                        <div className="add_modal_group">
                                            <label htmlFor="pass" className="add_modal_label">
                                                Nhập PassWord:
                                            </label>
                                            <input
                                                id="pass"
                                                name="pass"
                                                type="text"
                                                placeholder="Nhập PassWord"
                                                className="add_modal_control"
                                            />
                                        </div>
                                        <div className="add_modal_group">
                                            <label htmlFor="sdt" className="add_modal_label">
                                                Nhập Số điện thoại:
                                            </label>
                                            <input
                                                id="sdt"
                                                name="sdt"
                                                type="text"
                                                placeholder="Nhập Số điện thoại"
                                                className="add_modal_control"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={clsx('add_modal_footer', 'px-5')}>
                                <div className="float-right m-3">
                                    <Button
                                        className={clsx('save_btn', 'mr-3')}
                                        onClick={handleOpenAddModal}
                                        variant="contained"
                                    >
                                        Lưu thay đổi
                                    </Button>
                                    <Button className="close_btn" onClick={handleCloseAddModal} variant="contained">
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
