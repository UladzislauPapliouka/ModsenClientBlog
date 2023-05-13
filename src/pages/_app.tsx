import '../styles/global.scss';
import React from 'react';
import { type AppProps } from 'next/app';
import Link from '@components/Link';
import Button from '@components/Button';
import Typography from '@components/Typography';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Routes from '@constants/routes';
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
    <Footer />
  </div>
);
export default App;
