import clsx from 'clsx';
import * as React from 'react';
import styles from './charts.module.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        Total: 2000,
    },
    {
        name: 'February',
        Total: 1200,
    },
    {
        name: 'March',
        Total: 2300,
    },
    {
        name: 'April',
        Total: 1000,
    },
    {
        name: 'May',
        Total: 8000,
    },
    {
        name: 'June',
        Total: 700,
    },
];

export interface ChartsProps {}

export const Charts = () => {
    return (
        <div className={clsx(styles.chart)}>
            <div className={clsx(styles.title)}>Thống kê doanh thu 6 tháng gần nhất</div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
