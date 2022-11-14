import React, { FC, Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { getEventById, getFeaturedEvents } from '../../api/events';
import { Event } from '../../components/event-list';
import Head from 'next/head';

type ComponentProps = {
    className?: string;
    event: Event
};

const EventDetailPage: FC<ComponentProps> = (props) => {
    const { event } = props;

    if (!event) {
        return <p>No event found!</p>
    }

    return (
        <Fragment>
            <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.description} />
            </Head>
            <EventSummary title={event.title}/>
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
};

export const getStaticProps = async (context: GetStaticPropsContext<any>): Promise<GetStaticPropsResult<{[key: string]: any}>> => {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);
    return {
        props: {
            event
        },
        revalidate: 30
    }
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
    const events = await getFeaturedEvents();
    const paths = events.map((event) => ({ params: { eventId: event.id }}));

    return {
        paths,
        fallback: true,
    }
}

export default EventDetailPage;
