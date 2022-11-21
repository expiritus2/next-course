import React, { FC } from 'react';
import { PostItem } from 'components';
import { PostGrid } from '../types';

import styles from './index.module.css';

type ComponentProps = {
    className?: string;
    posts: PostGrid[];
};

const PostsGrid: FC<ComponentProps> = (props) => {
    const { posts }  = props;

    return (
        <ul className={styles.grid}>
            {posts.map((post) => (
                <PostItem key={post.slug} post={post}  />
            ))}
        </ul>
    );
};

export default PostsGrid;
