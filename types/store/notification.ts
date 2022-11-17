export enum NotificationStatus {
    PENDING = 'pending',
    SUCCESS = 'success',
    ERROR = 'error'
}

export type NotificationProps = {
    title: string;
    message: string;
    status: NotificationStatus
} | null

export type NotificationType = {
    notification: NotificationProps | null;
    showNotification: (notificationData: NotificationProps) => void
    hideNotification: () => void
}
