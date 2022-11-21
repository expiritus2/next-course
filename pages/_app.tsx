import type { AppProps } from 'next/app';
import { Layout } from 'components';
import Head from 'next/head';

import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}
