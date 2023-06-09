import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'components-wil';
import Image from 'next/image';

import aboutUsText from '@/pages/about/config';
import { type typographyVariants } from '@/types';
import hands from '@assets/images/ground-group-growth-hands-461049.png';
import mainPhoto from '@assets/images/photo-of-woman-wearing-eyeglasses-31844054.png';
import people from '@assets/images/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png';
import { AuthorsList, JoinUs } from '@components';
import ContentContainer from '@containers/ContentContainer';

import styles from './about.module.scss';

const HomePage = (): JSX.Element => {
  const [t] = useTranslation();

  return (
    <main>
      <ContentContainer className={styles.mainBlock}>
        <article className={styles.header}>
          <section className={styles.primaryInfo}>
            <Typography variant="head6">
              {t('aboutUs.mainBlock.primaryInfo.subtitle')}
            </Typography>
            <Typography variant="head2">
              {t('aboutUs.mainBlock.primaryInfo.title')}
            </Typography>
          </section>
          <div className={styles.secondaryInfo}>
            <Typography variant="body2">
              {t('aboutUs.mainBlock.secondaryInfo')}
            </Typography>
          </div>
        </article>
        <article className={styles.stats}>
          <section>
            <Typography variant="head1">
              {t('aboutUs.mainBlock.stats1.value')}
            </Typography>
            <Typography variant="head6">
              {t('aboutUs.mainBlock.stats1.title')}
            </Typography>
          </section>
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
        </article>
        <figure>
          <Image
            src={mainPhoto}
            alt="main"
          />
        </figure>
      </ContentContainer>
      <ContentContainer className={styles.aboutUs}>
        <section>
          {aboutUsText.blockOne.map(([variant, text]) => (
            <Typography
              key={text}
              variant={variant as `${typographyVariants}`}>
              {t(`aboutUs.mission.${text}`)}
            </Typography>
          ))}
        </section>
        <section>
          {aboutUsText.blockTwo.map(([variant, text]) => (
            <Typography
              key={text}
              variant={variant as `${typographyVariants}`}>
              {t(`aboutUs.mission.${text}`)}
            </Typography>
          ))}
        </section>
      </ContentContainer>
      <ContentContainer className={styles.description}>
        <section className={styles.blockOne}>
          <summary className={styles.content}>
            <Typography variant="head6">
              {t('aboutUs.description.title1')}
            </Typography>
            <Typography variant="head3">
              {t('aboutUs.description.subtitle1')}
            </Typography>
            <Typography variant="body1">
              {t('aboutUs.description.text1')}
            </Typography>
          </summary>
          <figure>
            <Image
              src={hands}
              alt="Hands"
            />
            <div className={styles.figurka} />
          </figure>
        </section>
        <section className={styles.blockTwo}>
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
        </section>
      </ContentContainer>
      <ContentContainer className={styles.authors}>
        <Typography variant="head2">{t('home.listOfAuthors')}</Typography>
        <AuthorsList />
      </ContentContainer>
      <JoinUs />
    </main>
  );
};

export default HomePage;
