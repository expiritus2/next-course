import React, { FC, Fragment } from 'react';
import { PostContent } from 'components';
import { GetStaticPaths, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { getPostData, getPostsFiles } from '../../lib/posts-util';
import { PostGrid } from '../../components/posts/types';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';

type ComponentProps = {
    className?: string;
    post: PostGrid;
};

const PostDetailPage: FC<ComponentProps> = (props) => {
    const { post } = props;

    return (
        <Fragment>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt}/>
            </Head>
            <PostContent post={post}/>
        </Fragment>
    );
};

interface Query extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps = (context: GetStaticPropsContext<Query>): GetStaticPropsResult<{ post: PostGrid }> => {
    const { params } = context;
    const { slug } = params || {};

    const post = getPostData(slug!);

    return {
        props: {
            post
        },
        revalidate: 600
    }
};

export const getStaticPaths = (): GetStaticPathsResult => {
    const postFilenames = getPostsFiles();

    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map((slug => ({ params: { slug } }))),
        fallback: false
    }
};

export default PostDetailPage;
