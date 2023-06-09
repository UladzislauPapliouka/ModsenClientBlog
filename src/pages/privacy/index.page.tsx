import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'components-wil';
import moment from 'moment';

import ContentContainer from '@containers/ContentContainer';

import 'moment/locale/ru';

import styles from './privecy.module.scss';

const HomePage = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const [date, setDate] = useState('');

  useEffect(() => {
    const localMoment = moment();

    localMoment.locale(i18n.language);
    setDate(localMoment.format('DD MMM YYYY'));
  }, [i18n.language]);

  return (
    <div>
      <ContentContainer className={styles.pageHead}>
        <Typography variant="head1">{t('privacyPolicy.pageTitle')}</Typography>
        <Typography variant="body1">
          {t('privacyPolicy.lastUpdate', { date })}
        </Typography>
      </ContentContainer>
      <ContentContainer className={styles.privacyInfo}>
        <Typography variant="head1">{t('privacyPolicy.head1')}</Typography>
        <Typography variant="body1">{t('privacyPolicy.body1')}</Typography>
        <Typography variant="head2">{t('privacyPolicy.head2')}</Typography>
        <Typography variant="body1">{t('privacyPolicy.body2')}</Typography>
      </ContentContainer>
    </div>
  );
};

export default HomePage;
