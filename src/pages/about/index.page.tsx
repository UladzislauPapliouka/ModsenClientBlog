import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import hands from '@assets/images/ground-group-growth-hands-461049.png';
import people from '@assets/images/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png';
import AuthorsList from '@components/AuthorsList';
import JoinUs from '@components/JoinUs';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';

import styles from './about.module.scss';

const HomePage = (): JSX.Element => {
  const [t] = useTranslation();

  return (
    <div>
      <ContentContainer className={styles.description}>
        <div className={styles.blockOne}>
          <div className={styles.content}>
            <Typography variant="head2">
              {t('aboutUs.description.title1')}
            </Typography>
            <Typography variant="head4">
              {t('aboutUs.description.subtitle1')}
            </Typography>
            <Typography variant="body1">
              {t('aboutUs.description.text1')}
            </Typography>
          </div>
          <figure>
            <Image
              src={hands}
              alt="Hands"
            />
          </figure>
        </div>
        <div className={styles.blockTwo}>
          <div className={styles.content}>
            <Typography variant="head2">
              {t('aboutUs.description.title2')}
            </Typography>
            <Typography variant="head4">
              {t('aboutUs.description.subtitle2')}
            </Typography>
            <Typography variant="body1">
              {t('aboutUs.description.text2')}
            </Typography>
          </div>
          <figure>
            <Image
              src={people}
              alt="People"
            />
          </figure>
        </div>
      </ContentContainer>
      <ContentContainer className={styles.authors}>
        <Typography variant="head2">{t('home.listOfAuthors')}</Typography>
        <AuthorsList />
      </ContentContainer>
      <JoinUs />
    </div>
  );
};

export default HomePage;
