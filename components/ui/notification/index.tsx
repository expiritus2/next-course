import { FC, useContext } from 'react';

import styles from './index.module.css';
import NotificationContext from 'store/notification-context';

type ComponentProps = {
    title: string;
    message: string;
    status: string;
}

const Notification: FC<ComponentProps> = (props) => {
    const notificationCtx = useContext(NotificationContext);

    const { title, message, status } = props;

    let statusClasses = '';

    if (status === 'success') {
        statusClasses = styles.success;
    }

    if (status === 'error') {
        statusClasses = styles.error;
    }

    if (status === 'pending') {
        statusClasses = styles.pending;
    }

    const activeClasses = `${styles.notification} ${statusClasses}`;

    return (
        <div
            className={activeClasses}
            onClick={notificationCtx.hideNotification}
        >
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
}

export default Notification;