import React, { FC, MouseEventHandler } from 'react';
import Link from 'next/link';
import styles from './index.module.css';

type ComponentProps = {
    className?: string;
    children: React.ReactNode;
    link?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>
};

const Button: FC<ComponentProps> = (props) => {
    const { className, children, link } = props;

    if (link) {
        return (
            <Link className={styles.btn} href={link}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={props.onClick}>{children}</button>
    )
};

export default Button;
