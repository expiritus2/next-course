import { createPortal } from 'react-dom';
import { FC } from 'react';
import { RequestStatus } from 'types/request';
import styles from './index.module.css';

type ComponentProps = {
    className?: string;
    title: string;
    message: string;
    status: RequestStatus;
};

const Notification: FC<ComponentProps> = (props) => {
    const { title, message, status } = props;

    let statusClasses = '';

    if (status === 'success') {
        statusClasses = styles.success;
    }

    if (status === 'error') {
        statusClasses = styles.error;
    }

    const cssClasses = `${styles.notification} ${statusClasses}`;

    return createPortal(
        <div className={cssClasses}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>,
        document.getElementById('notifications') as Element
    );
}

export default Notification;
