import { FormEventHandler, useContext, useRef } from 'react';

import styles from './index.module.css';
import HTTPMethod from 'http-method-enum';
import NotificationContext from '../../../store/notification-context';
import { NotificationStatus } from '../../../types';

function NewsletterRegistration() {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const notificationCtx = useContext(NotificationContext);

    const registrationHandler: FormEventHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current?.value;

        notificationCtx.showNotification({
            title: 'Signing up',
            message: 'Registering for newsletter',
            status: NotificationStatus.PENDING
        });

        fetch('/api/newsletter', {
            method: HTTPMethod.POST,
            body: JSON.stringify({ email: enteredEmail }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                response.json().then((data) => {
                    throw new Error(data.message || 'Something went wrong!')
                })
            })
            .then((data) => {
                notificationCtx.showNotification({
                    title: 'Success!',
                    message: 'Successfully registered for newsletter',
                    status: NotificationStatus.SUCCESS
                });
            })
            .catch((err) => {
                notificationCtx.showNotification({
                    title: 'Error!',
                    message: err.message,
                    status: NotificationStatus.ERROR
                });
            });
    }

    return (
        <section className={styles.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={styles.control}>
                    <input
                        ref={emailInputRef}
                        type='email'
                        id='email'
                        placeholder='Your email'
                        aria-label='Your email'
                    />
                    <button>Register</button>
                </div>
            </form>
        </section>
    );
}

export default NewsletterRegistration;
