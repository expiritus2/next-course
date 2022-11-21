import React, { FC } from 'react';
import styles from './index.module.css';

type ComponentProps = {
    className?: string;
};

const Logo: FC<ComponentProps> = (props) => {
    const {}  = props;

    return (
        <div className={styles.logo}>Max&apos; Next Blog</div>
    );
};

export default Logo;
