import Head from 'next/head';
import { FC } from 'react';
import EventList from '../components/event-list';
import { GetStaticPropsResult } from 'next';
import { getFeaturedEvents } from '../api/events';
import { Event } from '../components/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';

type ComponentProps = {
    className: string;
    events: Event[],
};

const HomePage: FC<ComponentProps> = (props) => {
    const { events } = props;
    return (
        <div>
            <Head>
                <title>NextJS Events</title>
                <meta name="description" content="Find a lot of great events that allow you to evolve..." />
            </Head>
            <NewsletterRegistration />
            <EventList items={events}/>
        </div>
    )
}

export const getStaticProps = async (): Promise<GetStaticPropsResult<{ [key: string]: any }>> => {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents,
        },
        revalidate: 1800
    }
};

export default HomePage;
