import { FC, useEffect, useState } from 'react';

import CommentList from '../comment-list';
import NewComment, { AddCommentProps } from '../new-comment';
import HTTPMethod from 'http-method-enum';
import { Comment } from 'types';

import styles from './index.module.css';

type ComponentProps = {
    className?: string;
    eventId: string;
};

const Comments: FC<ComponentProps> = (props) => {
    const { eventId } = props;
    const [comments, setComments] = useState<Comment[]>([]);

    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        if (showComments) {
            fetch(`/api/comments/${eventId}`)
                .then((response) => response.json())
                .then((data: { comments: Comment[] }) => {
                    setComments(data.comments);
                });
        }
    }, [showComments]);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);

        if (!showComments) {

        }
    }

    function addCommentHandler(commentData: AddCommentProps) {
        fetch(`/api/comments/${eventId}`, {
            method: HTTPMethod.POST,
            body: JSON.stringify(commentData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    return (
        <section className={styles.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler}/>}
            {showComments && <CommentList items={comments}/>}
        </section>
    );
}

export default Comments;
