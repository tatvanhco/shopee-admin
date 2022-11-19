import clsx from 'clsx';
import * as React from 'react';
import styles from './feature.module.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export interface FeatureProps {}

export const Feature = () => {
    return (
        <div className={clsx(styles.feature, 'flex-2')}>
            <div className={clsx(styles.top, 'flex', 'justify-between', 'item')}>
                <h1 className={clsx(styles.title, 'font-semibold')}>Tổng doanh thu</h1>
                <MoreVertOutlinedIcon />
            </div>
            <div className="bottom"></div>
        </div>
    );
};
