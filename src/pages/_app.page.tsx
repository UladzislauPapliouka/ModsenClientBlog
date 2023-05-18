import React from 'react';
import { Toaster } from 'react-hot-toast';
import { type AppProps } from 'next/app';
import Head from 'next/head';

import Button from '@components/Button';
import ErrorBoundary from '@components/ErrorBoundaries';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Link from '@components/Link';
import Typography from '@components/Typography';
import Routes from '@constants/routes';

import '../styles/global.scss';
import styles from './_app.module.scss';

const App = ({ Component, pageProps }: AppProps) => {
  if (!process.browser) React.useLayoutEffect = React.useEffect;

  return (
    <div className={styles.app}>
      <Head>
        <title>Modsen client blog</title>
      </Head>
      <ErrorBoundary>
        <Header>
          <Link href={Routes.Home}>Home</Link>
          <Link href={Routes.Blog}>Blog</Link>
          <Link href={Routes['About Us']}>About Us</Link>
          <Link href={Routes['Contact Us']}>Contact Us</Link>
          <Button variant="secondary">
            <Typography variant="head4">Video about us</Typography>
          </Button>
        </Header>
        <Component {...pageProps} />
        <Toaster />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
