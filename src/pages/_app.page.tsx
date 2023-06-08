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
import envVariables from '@constants/envVariables';
import Routes from '@constants/routes';
import ContentContainer from '@containers/ContentContainer';

import './i18n';

import '../styles/global.scss';
import styles from './_app.module.scss';

const headerRoutes = [
  Routes.Home,
  Routes.Blog,
  Routes['About Us'],
  Routes['Contact Us'],
];

const App = ({ Component, pageProps }: AppProps) => {
  if (!process.browser) React.useLayoutEffect = React.useEffect;

  const { locale, pathname, query } = useRouter();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale === 'en' ? 'en' : 'ru').catch(() => null);
  }, [locale]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleIsVideoOpen = () => {
    setIsVideoOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.app}>
      <Head>
        <title>Modsen client blog</title>
      </Head>
      <ErrorBoundary>
        <Header>
          {headerRoutes.map((route) => (
            <Link
              key={route}
              href={route}>
              {t(`links.${route}`)}
            </Link>
          ))}
          <Button
            onClick={toggleIsVideoOpen}
            variant="secondary">
            <Typography variant="head4">{t('links.Video')}</Typography>
          </Button>
          {isVideoOpen && (
            <ModalFC handleClose={toggleIsVideoOpen}>
              <ContentContainer className={styles.video}>
                <YouTube
                  videoId={envVariables.NEXT_PUBLIC_VIDEO_ID}
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
                pathname,
                query,
              }}
              locale={locale === 'en' ? 'ru' : 'en'}>
              {locale?.toUpperCase()}
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
