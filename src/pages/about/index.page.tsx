import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import aboutUsText from '@/pages/about/config';
import { type typographyVariants } from '@/types';
import hands from '@assets/images/ground-group-growth-hands-461049.png';
import mainPhoto from '@assets/images/photo-of-woman-wearing-eyeglasses-31844054.png';
import people from '@assets/images/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png';
import { AuthorsList, JoinUs, Typography } from '@components';
import ContentContainer from '@containers/ContentContainer';

import styles from './about.module.scss';

const HomePage = (): JSX.Element => {
  const [t] = useTranslation();

  return (
    <div>
      <ContentContainer className={styles.mainBlock}>
        <div className={styles.header}>
          <div className={styles.primaryInfo}>
            <Typography variant="head6">
              {t('aboutUs.mainBlock.primaryInfo.subtitle')}
            </Typography>
            <Typography variant="head2">
              {t('aboutUs.mainBlock.primaryInfo.title')}
            </Typography>
          </div>
          <div className={styles.secondaryInfo}>
            <Typography variant="body2">
              {t('aboutUs.mainBlock.secondaryInfo')}
            </Typography>
          </div>
        </div>
        <div className={styles.stats}>
          <div>
            <Typography variant="head1">
              {t('aboutUs.mainBlock.stats1.value')}
            </Typography>
            <Typography variant="head6">
              {t('aboutUs.mainBlock.stats1.title')}
            </Typography>
          </div>
          <div>
            <Typography variant="head1">
              {t('aboutUs.mainBlock.stats2.value')}
            </Typography>
            <Typography variant="head6">
              {t('aboutUs.mainBlock.stats2.title')}
            </Typography>
          </div>
          <div>
            <Typography variant="head1">
              {t('aboutUs.mainBlock.stats3.value')}
            </Typography>
            <Typography variant="head6">
              {t('aboutUs.mainBlock.stats3.title')}
            </Typography>
          </div>
        </div>
        <figure>
          <Image
            src={mainPhoto}
            alt="main"
          />
        </figure>
      </ContentContainer>
      <ContentContainer className={styles.aboutUs}>
        <div>
          {aboutUsText.blockOne.map(([variant, text]) => (
            <Typography
              key={text}
              variant={variant as `${typographyVariants}`}>
              {t(`aboutUs.mission.${text}`)}
            </Typography>
          ))}
        </div>
        <div>
          {aboutUsText.blockTwo.map(([variant, text]) => (
            <Typography
              key={text}
              variant={variant as `${typographyVariants}`}>
              {t(`aboutUs.mission.${text}`)}
            </Typography>
          ))}
        </div>
      </ContentContainer>
      <ContentContainer className={styles.description}>
        <div className={styles.blockOne}>
          <div className={styles.content}>
            <Typography variant="head6">
              {t('aboutUs.description.title1')}
            </Typography>
            <Typography variant="head3">
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
            <div className={styles.figurka} />
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
            <div className={styles.circle} />
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
