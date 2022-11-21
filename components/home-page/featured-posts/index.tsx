import React, { FC } from 'react';
import { PostsGrid } from 'components';
import { PostGrid } from '../../posts/types';

import styles from './index.module.css';

type ComponentProps = {
    className?: string;
    posts: PostGrid[];
};

const FeaturedPosts: FC<ComponentProps> = (props) => {
    const { posts }  = props;

    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    );
};

export default FeaturedPosts;
