import React, { FC } from 'react';
import styles from './index.module.css';
import Image from 'next/image';

type ComponentProps = {
    className?: string;
    title: string;
    image: string;
};

const PostHeader: FC<ComponentProps> = (props) => {
    const { title, image } = props;

    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} width={200} height={150} />
        </header>
    );
};

export default PostHeader;
