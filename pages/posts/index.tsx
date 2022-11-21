import React, { FC, Fragment } from 'react';
import { AllPosts } from 'components';
import { GetStaticPropsResult } from 'next';
import { PostGrid } from '../../components/posts/types';
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head';

type ComponentProps = {
    className?: string;
    posts: PostGrid[];
};

const AllPostsPage: FC<ComponentProps> = (props) => {
    const { posts } = props;

    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of all programming-related tutorials and posts"/>
            </Head>
            <AllPosts posts={posts} />
        </Fragment>
    );
};

export const getStaticProps = (): GetStaticPropsResult<{ posts: PostGrid[] }> => {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    }
}

export default AllPostsPage;
