import React, { FC, Fragment } from 'react';
import { Hero, FeaturedPosts } from 'components';
import { GetStaticPropsResult } from 'next';
import { getFeaturedPosts } from '../lib/posts-util';
import { PostGrid } from '../components/posts/types';
import Head from 'next/head';

type ComponentProps = {
    className?: string;
    posts: PostGrid[];
};

const HomePage: FC<ComponentProps> = (props) => {
    const { posts } = props;

    return (
        <Fragment>
            <Head>
                <title>Welcome to my blog</title>
                <meta name="description" content="I post about programming and web development."/>
            </Head>
            <Hero/>
            <FeaturedPosts posts={posts}/>
        </Fragment>
    );
};

export const getStaticProps = (): GetStaticPropsResult<{ posts: PostGrid[] }> => {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage;
