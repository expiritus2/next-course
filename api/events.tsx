import { Event } from '../components/event-list';

export const getAllEvents = async (): Promise<Event[]> => {
    const response = await fetch('https://nextjs-course-94570-default-rtdb.firebaseio.com/events.json');
    return response.json();
}

export const getFeaturedEvents = async (): Promise<Event[]> => {
    const allEvents = await getAllEvents();
    return allEvents.filter((event: Event) => event.isFeatured);
}

export const getEventById = async (id: string): Promise<Event | undefined> => {
    const allEvents = await getAllEvents();
    return allEvents.find((event: Event) => event.id === id);
}

export const getFilteredEvents = async (dateFilter: { year: number; month: number }) => {
    const { year, month } = dateFilter;
    const allEvents = await getAllEvents();

    return allEvents.filter((event: Event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
}
