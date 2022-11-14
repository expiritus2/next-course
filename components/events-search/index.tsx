import React, { FC, FormEventHandler, useRef } from 'react';
import Button from '../ui/button';

import styles from './index.module.css';

type ComponentProps = {
    className?: string;
    onSearch: (selectedYear: string, selectedMonth: string) => void;
};

const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
]

const EventsSearch: FC<ComponentProps> = (props) => {
    const { className } = props;

    const yearInputRef = useRef<HTMLSelectElement>(null);
    const monthInputRef = useRef<HTMLSelectElement>(null);

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const selectedYear = yearInputRef.current?.value;
        const selectedMonth = monthInputRef.current?.value;

        if (selectedYear && selectedMonth) {
            props.onSearch(selectedYear, selectedMonth);
        }
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={styles.control}>
                    <label htmlFor="month"></label>
                    <select id="month" ref={monthInputRef}>
                        {months.map((month) => (
                            <option key={month.value} value={month.value}>{month.label}</option>
                        ))}
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    );
};

export default EventsSearch;
