import clsx from 'clsx';
import * as React from 'react';
import styles from './feature.module.scss';

export interface FeatureProps {}

export const Feature = () => {
    return (
        <div className={clsx(styles.feature, 'flex-2')}>
            <div className="top">
                h1.title
            </div>
            <div className="bottom"></div>
        </div>
    );
};
