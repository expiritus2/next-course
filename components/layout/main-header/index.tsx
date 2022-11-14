import React, { FC } from 'react';
import Link from 'next/link';
import styles from './index.module.css';

type ComponentProps = {
    className?: string;
};

const MainHeader: FC<ComponentProps> = (props) => {
    const { className } = props;

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">NextEvents</Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li><Link href="/events">Browse All Events</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
