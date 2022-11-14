import React, { FC } from 'react';
import EventItem from '../event-item';
import styles from './index.module.css';

export type Event = {
    title: string;
    image: string; date: string;
    location: string;
    id: string,
    isFeatured: boolean;
    description: string
}

type ComponentProps = {
    className?: string;
    items: Event[]
};

const EventList: FC<ComponentProps> = (props) => {
    const { items } = props;

    return (
        <ul className={styles.list}>
            {items.map((event) => (
                <EventItem key={event.id} {...event} />
            ))}
        </ul>
    );
};

export default EventList;
