import React from 'react';
import { useTranslation } from 'react-i18next';

import AuthorsList from '@components/AuthorsList';
import JoinUs from '@components/JoinUs';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';

import styles from './about.module.scss';

const HomePage = (): JSX.Element => {
  const [t] = useTranslation();

  return (
    <div>
      <ContentContainer className={styles.authors}>
        <Typography variant="head2">{t('home.listOfAuthors')}</Typography>
        <AuthorsList />
      </ContentContainer>
      <JoinUs />
    </div>
  );
};

export default HomePage;
