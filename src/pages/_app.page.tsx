import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import YouTube from 'react-youtube';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Button from '@components/Button';
import ErrorBoundary from '@components/ErrorBoundaries';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Link from '@components/Link';
import ModalFC from '@components/Modal';
import Typography from '@components/Typography';
import Routes from '@constants/routes';
import ContentContainer from '@containers/ContentContainer';

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
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
          <Button
            onClick={() => {
              setIsVideoOpen(true);
            }}
            variant="secondary">
            <Typography variant="head4">{t('links.Video')}</Typography>
          </Button>
          {isVideoOpen && (
            <ModalFC
              handleClose={() => {
                setIsVideoOpen(false);
              }}>
              <ContentContainer className={styles.video}>
                <YouTube
                  videoId="heYPCc8M3VI"
                  opts={{
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                />
              </ContentContainer>
            </ModalFC>
          )}
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
