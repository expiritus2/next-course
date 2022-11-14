import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import EventList from '../../components/event-list';
import EventsSearch from '../../components/events-search';
import { useRouter } from 'next/router';
import { GetStaticPropsResult } from 'next';
import { getAllEvents } from '../../api/events';
import { Event } from '../../components/event-list';

type ComponentProps = {
    className: string;
    events: Event[]
};

const AllEventsPage: FC<ComponentProps> = (props) => {
    const { events } = props;
    const router = useRouter();

    const findEventsHandler = (year: string, month: string) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta name="description" content="Find a lot of great events that allow you to evolve..." />
            </Head>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    );
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<any>> => {
    const events = await getAllEvents();

    return {
        props: {
            events
        },
        revalidate: 60
    }
};

export default AllEventsPage;
