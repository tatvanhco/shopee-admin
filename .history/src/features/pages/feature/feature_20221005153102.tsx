import clsx from 'clsx';
import * as React from 'react';
import styles from './feature.module.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export interface FeatureProps {}

export const Feature = () => {
    return (
        <div className={clsx(styles.feature, 'flex-2')}>
            <div className={clsx(styles.top, 'flex', 'justify-between', 'items-center')}>
                <h1 className={clsx(styles.title, 'font-medium')}>Tổng doanh thu</h1>
                <MoreVertOutlinedIcon fontSize="small" />
            </div>
            <div className={clsx(styles.bottom, 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-4')}>
                <div className={clsx(styles.feature_chart)}>
                    <CircularProgressbar value={70} text={'70'} strokeWidth={7} />
                </div>
                <div className={'mt-3', g}>
                    <p className={clsx(styles.title)}>Tổng doanh thu hôm nay:</p>
                    <p className={clsx(styles.amount)}>5.000.000 VNĐ</p>
                    <p className={clsx(styles.desc, 'font-light')}>tốt hơn hơn hôm qua</p>
                </div>
            </div>
        </div>
    );
};
