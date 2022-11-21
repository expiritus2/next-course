import React, { FC, Fragment } from 'react';
import { ContactForm } from 'components';
import Head from 'next/head';

type ComponentProps = {
    className?: string;
};

const ContactPage: FC<ComponentProps> = (props) => {
    const {}  = props;

    return (
        <Fragment>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Send me your messages" />
            </Head>
            <ContactForm />
        </Fragment>
    );
};

export default ContactPage;
