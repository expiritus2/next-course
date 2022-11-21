import React, { FC, FormEventHandler, useEffect, useState } from 'react';
import styles from './index.module.css';
import HTTPMethod from 'http-method-enum';
import { RequestStatus } from '../../../types';
import { Notification } from 'components';

type ContactDetails = {
    email: string;
    name: string;
    message: string;
}

const sendContactData = async (contactDetails: ContactDetails) => {
    const response = await fetch('/api/contact', {
        method: HTTPMethod.POST,
        body: JSON.stringify({
            email: contactDetails.email,
            name: contactDetails.name,
            message: contactDetails.message
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }
}

type ComponentProps = {
    className?: string;
};

const ContactForm: FC<ComponentProps> = (props) => {
    const {} = props;
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [requestStatus, setRequestStatus] = useState<RequestStatus>();
    const [requestError, setRequestError] = useState<string>('');

    useEffect(() => {
        if (requestStatus === RequestStatus.PENDING || requestStatus === RequestStatus.ERROR) {
            const timer = setTimeout(() => {
                setRequestStatus(undefined);
                setRequestError('');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    const sendMessageHandler: FormEventHandler = async (event) => {
        event.preventDefault();

        setRequestStatus(RequestStatus.PENDING);

        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            });
            setRequestStatus(RequestStatus.SUCCESS);
            setEnteredMessage('');
            setEnteredEmail('');
            setEnteredName('');
        } catch (err: any) {
            setRequestError(err.message);
            setRequestStatus(RequestStatus.ERROR);
        }
    };

    let notification;

    if (requestStatus === RequestStatus.PENDING) {
        notification = {
            status: RequestStatus.PENDING,
            title: 'Sending message...',
            message: 'Your message is on its way!'
        };
    }

    if (requestStatus === RequestStatus.SUCCESS) {
        notification = {
            status: RequestStatus.SUCCESS,
            title: 'Success!',
            message: 'Message sent successfully!'
        }
    }

    if (requestStatus === RequestStatus.ERROR) {
        notification = {
            status: RequestStatus.ERROR,
            title: 'Error!',
            message: requestError
        }
    }

    return (
        <section className={styles.contact}>
            <h1>How can I help you?</h1>
            <form onSubmit={sendMessageHandler} className={styles.form}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor="email">Your Email</label>
                        <input type="text" id="email" required value={enteredEmail}
                               onChange={(event) => setEnteredEmail(event.target.value)}/>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" required value={enteredName}
                               onChange={(event) => setEnteredName(event.target.value)}/>
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" rows={5} value={enteredMessage}
                              onChange={(event) => setEnteredMessage(event.target.value)}></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification &&
                <Notification title={notification.title} message={notification.message} status={notification.status}/>}
        </section>
    );
};

export default ContactForm;
