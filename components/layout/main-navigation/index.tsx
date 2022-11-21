import React, { FC } from 'react';
import { Logo } from 'components/index';
import Link from 'next/link';

import styles from './index.module.css';

type ComponentProps = {
    className?: string;
};

const MainNavigation: FC<ComponentProps> = (props) => {
    const {}  = props;

    return (
        <header className={styles.header}>
            <Link href="/"><Logo /></Link>
            <nav>
                <ul>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
