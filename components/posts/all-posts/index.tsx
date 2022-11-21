import React, { FC } from 'react';
import { PostsGrid } from 'components';
import { DUMMY_POSTS } from 'data/posts';

import styles from './index.module.css';
import { PostGrid } from '../types';

type ComponentProps = {
    className?: string;
    posts: PostGrid[];
};

const AllPosts: FC<ComponentProps> = (props) => {
    const { posts }  = props;

    return (
        <section className={styles.posts}>
            <h1>AllPosts</h1>
            <PostsGrid posts={posts} />
        </section>
    );
};

export default AllPosts;
