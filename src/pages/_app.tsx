import React from 'react';
import { Toaster } from 'react-hot-toast';
import { type AppProps } from 'next/app';

import Button from '@components/Button';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Link from '@components/Link';
import Typography from '@components/Typography';
import Routes from '@constants/routes';

import '../styles/global.scss';
import styles from './_app.module.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <div className={styles.app}>
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
  </div>
);

export default App;
