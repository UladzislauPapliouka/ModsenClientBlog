import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment/moment';
import Image from 'next/image';

import img from '@assets/images/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.png';
import Button from '@components/Button';
import Link from '@components/Link';
import Typography from '@components/Typography';
import routes from '@constants/routes';
import ContentContainer from '@containers/ContentContainer';
import { getLastPost } from '@services/posts';

import styles from './home.module.scss';

const HomePage = (): JSX.Element => {
  const [t, i18n] = useTranslation();

  const [date, setDate] = useState('');

  const lastPost = getLastPost(new Date());

  useEffect(() => {
    setDate(moment(lastPost.date).locale(i18n.language).format('MMM DD, YYYY'));
  }, [i18n.language]);

  return (
    <div>
      <div className={styles.mainPost}>
        <figure className={styles.mainPostImage}>
          <Image
            src={lastPost.image}
            alt="Main"
          />
        </figure>
        <ContentContainer className={styles.lastPost}>
          <div className={styles.lastPostInfo}>
            <Typography variant="body1">
              {t('home.lastPost.postType')}
            </Typography>
            <Typography variant="head1">{lastPost.title}</Typography>
            <Typography
              className={styles.postInfo}
              variant="body1">
              By{' '}
              <Typography
                className={styles.author}
                variant="body1">
                {lastPost.author.name}
              </Typography>{' '}
              | {date}
            </Typography>
            <Typography
              className={styles.postText}
              variant="body1">
              {lastPost.text[0][1]}
            </Typography>
            <Link href={`${routes.Blog}/${lastPost.id}`}>
              <Button>
                <Typography variant="head5">
                  {t('posts.readMore')} {'>'}
                </Typography>
              </Button>
            </Link>
          </div>
          <div className={styles.featuredImage} />
        </ContentContainer>
      </div>
    </div>
  );
};

export default HomePage;
