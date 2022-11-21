import React, { FC } from 'react';
import { PostHeader } from 'components';
import ReactMarkdown from 'react-markdown';
import styles from './index.module.css';
import { PostGrid } from '../../types';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
type ComponentProps = {
    className?: string;
    post: PostGrid;
};

const PostContent: FC<ComponentProps> = (props) => {
    const { post } = props;

    const imagePath = `/images/posts/${post.image}`;

    const customRenderers = {
        // img(image: { [key: string]: any }) {
        //     return <Image src={`/images/posts/${image.src}`} alt={image.alt} width={600} height={300}/>
        // },
        p(p: { [key: string]: any }) {
            const { node } = p;

            if (node.children[0].type === 'element') {
                const image = node.children[0];

                return (
                    <div className={styles.image}>
                        <Image src={`/images/posts/${image.properties.src}`} alt={image.alt} width={600} height={300}/>
                    </div>
                )
            }

            return <p>{p.children}</p>;
        },
        code(code: { [key: string]: any }) {
            console.log(JSON.stringify(code, undefined, 2));
            const { className, children } = code;
            const [,language] = className.split('-');
            return (
                <SyntaxHighlighter language={language} style={atomDark}>
                    {children}
                </SyntaxHighlighter>
            )
        }
    }

    return (
        <article className={styles.content}>
            <PostHeader title={post.title} image={imagePath}/>
            {/* @ts-ignore */}
            <ReactMarkdown components={customRenderers}>{post.content!}</ReactMarkdown>
        </article>
    );
};

export default PostContent;
