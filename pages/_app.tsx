import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import Layout from '../components/layout/layout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
                <title></title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}
