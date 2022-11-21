import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';
import { PostGrid } from '../types';

type ComponentProps = {
    className?: string;
    post: PostGrid;
};

const PostItem: FC<ComponentProps> = (props) => {
    const { post }  = props;
    const { id, title, date, image, excerpt, slug } = post;

    console.log(slug);

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/posts/${image}`;
    const linkPath = `/posts/${slug}`

    return (
        <li className={styles.post}>
            <Link href={linkPath}>
                <div className={styles.image}>
                    <Image src={imagePath} alt={title} width={300} height={200} />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    );
};

export default PostItem;
