import React, { FC, Fragment, ReactNode, useContext } from 'react';
import MainHeader from '../main-header';
import Notification from 'components/ui/notification';
import NotificationContext from 'store/notification-context';

type ComponentProps = {
    className?: string;
    children: ReactNode;
};

const Layout: FC<ComponentProps> = (props) => {
    const notificationCtx = useContext(NotificationContext);

    const activeNotification = notificationCtx.notification;

    return (
        <Fragment>
            <MainHeader />
            <main>
                {props.children}
            </main>
            {activeNotification && (
                <Notification
                    title={activeNotification.title}
                    message={activeNotification.message}
                    status={activeNotification.status}
                />
            )}
        </Fragment>
    );
};

export default Layout;
