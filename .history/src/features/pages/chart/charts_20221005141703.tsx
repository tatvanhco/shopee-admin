import clsx from 'clsx';
import * as React from 'react';
import styles from './charts.module.scss';

export interface ChartsProps {}

export const Charts = () => {
    return <div className={clsx(styles.chars, 'flex-5')}>Chart</div>;
};
