import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio | Rustam Ziyodov</title>
        <meta
          name='description'
          content='Rustam is a software engineer based in Moscow, Russia who specialises in developing high-performing, human-friendly, conversion-oriented applications.'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.3/css/all.css'
          integrity='sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        {/* eslint-disable-next-line */}
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito&family=Roboto:wght@300;400;700;900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
