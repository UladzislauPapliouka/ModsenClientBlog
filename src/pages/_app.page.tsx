import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { type AppProps } from 'next/app';
import { log } from 'next/dist/server/typescript/utils';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Button from '@components/Button';
import ErrorBoundary from '@components/ErrorBoundaries';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Link from '@components/Link';
import Typography from '@components/Typography';
import Routes from '@constants/routes';

import './i18n';

import '../styles/global.scss';
import styles from './_app.module.scss';

const App = ({ Component, pageProps }: AppProps) => {
  if (!process.browser) React.useLayoutEffect = React.useEffect;

  const router = useRouter();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(router.locale === 'en' ? 'en' : 'ru').catch(() => null);
  }, [router.locale]);

  return (
    <div className={styles.app}>
      <Head>
        <title>Modsen client blog</title>
      </Head>
      <ErrorBoundary>
        <Header>
          <Link href={Routes.Home}>{t('links.Home')}</Link>
          <Link href={Routes.Blog}>{t('links.Blog')}</Link>
          <Link href={Routes['About Us']}>{t('links.About Us')}</Link>
          <Link href={Routes['Contact Us']}>{t('links.Contact Us')}</Link>
          <Button variant="secondary">
            <Typography variant="head4">{t('links.Video')}</Typography>
          </Button>

          <Typography
            className={styles.locale}
            variant="head5">
            <Link
              href={{
                pathname: router.pathname,
                query: router.query,
              }}
              locale={router.locale === 'en' ? 'ru' : 'en'}>
              {router.locale?.toUpperCase()}
            </Link>
          </Typography>
        </Header>
        <Component {...pageProps} />
        <Toaster />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
