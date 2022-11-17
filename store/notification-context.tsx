import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { NotificationProps, NotificationStatus, NotificationType } from '../types';

const NotificationContext = createContext<NotificationType>({
    notification: null,
    showNotification: () => {
    },
    hideNotification: () => {
    },
});

export const NotificationContextProvider: FC<{ children: ReactNode }> = (props) => {
    const [activeNotification, setActiveNotification] = useState<NotificationProps>(null);

    useEffect(() => {
        if (activeNotification && (activeNotification.status === NotificationStatus.SUCCESS || activeNotification.status === NotificationStatus.ERROR)) {
            const timer = setTimeout(() => {
                hideNotificationHandler();
            }, 3000);

            return () => {
                clearTimeout(timer);
            }
        }
    }, [activeNotification]);

    const showNotificationHandler = (notificationData: NotificationProps) => {
        setActiveNotification(notificationData);
    };

    const hideNotificationHandler = () => {
        setActiveNotification(null);
    }

    const context: NotificationType = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    };

    return (
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    )
};

export default NotificationContext;
