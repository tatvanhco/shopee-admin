import clsx from 'clsx';
import * as React from 'react';
import styles from './charts.module.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




export interface ChartsProps {}

export const Charts = () => {
    return <div className={clsx(styles.chart)}>Chart</div>;
};
