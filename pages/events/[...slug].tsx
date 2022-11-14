import React, { FC, Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/event-list';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { getFilteredEvents } from '../../api/events';
import { Event } from '../../components/event-list';
import Head from 'next/head';

type ComponentProps = {
    className: string;
    hasError?: boolean;
    events: Event[],
    date: {
        year: number;
        month: number;
    }
};

const FilteredEventsPage: FC<ComponentProps> = (props) => {
    const { hasError, events, date } = props;

    const pageHeadData = (
        <Head>
            <title>Filtered Events</title>
            <meta name="description" content={`All events for ${date.month}/${date.year}`}/>
        </Head>
    );

    if (hasError) {
        return <p className="center">Loading...</p>
    }

    if (!events || events.length === 0) {
        return (
            <Fragment>
                {pageHeadData}
                <p>No events found for the chosen filter!</p>
            </Fragment>
        );
    }

    return (
        <Fragment>
            {pageHeadData}
            <EventList items={events}/>
        </Fragment>
    );
};

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> => {
    const { params } = context;
    const filterData = params?.slug || [];
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return { props: { hasError: true } };
    }

    const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth });

    return {
        props: {
            events: filteredEvents,
            date: {
                year: numYear,
                month: numMonth
            }
        },
    }
}

export default FilteredEventsPage;
