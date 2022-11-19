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
            <div className="bottom">
                <div className={styles.featureChart}>
                    <CircularProgressbar value={70} text={'70'} strokeWidth={5} />
                </div>
                <p className={styles.title}>Tổng</p>
            </div>
        </div>
    );
};
