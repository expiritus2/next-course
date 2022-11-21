import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { PostGrid } from '../components/posts/types';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostData = (postIdentifier: string) => {
    const postSlug = postIdentifier.replace(/\.md$/, '')
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
        slug: postSlug,
        ...data,
        content
    } as unknown as PostGrid;
}

export const getPostsFiles = () => {
    return fs.readdirSync(postsDirectory);
};

export const getAllPosts = (): PostGrid[] => {
    const postFiles = getPostsFiles();
    const allPosts = postFiles.map((postFile) => getPostData(postFile)) as PostGrid[];

    return allPosts.sort((a, b) => a.date > b.date ? -1 : 1);
};

export const getFeaturedPosts = (): PostGrid[] => {
    const allPosts = getAllPosts();

    return allPosts.filter((post) => post.isFeatured);
}
