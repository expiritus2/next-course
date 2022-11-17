import styles from './index.module.css';
import { FC } from 'react';
import { Comment } from 'types';

type ComponentProps = {
    items: Comment[]
}

const CommentList: FC<ComponentProps> = (props) => {
    const { items } = props;

    return (
        <ul className={styles.comments}>
            {items.map((item) => (
                <li key={item.id}>
                    <p>{item.text}</p>
                    <div>
                        By <address>{item.name}</address>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CommentList;
