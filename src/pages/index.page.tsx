import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment/moment';
import Image from 'next/image';

import Button from '@components/Button';
import JoinUs from '@components/JoinUs';
import Link from '@components/Link';
import PostCard from '@components/PostCard';
import Typography from '@components/Typography';
import routes from '@constants/routes';
import ContentContainer from '@containers/ContentContainer';
import { getFeaturedPost, getLastPost, getPagePosts } from '@services/posts';

import styles from './home.module.scss';

const HomePage = (): JSX.Element => {
  const [t, i18n] = useTranslation();

  const [date, setDate] = useState('');

  const [dateFeatured, setFeaturedDate] = useState('');

  const lastPost = getLastPost(new Date());

  const featuredPost = getFeaturedPost();

  useEffect(() => {
    setDate(moment(lastPost.date).locale(i18n.language).format('MMM DD, YYYY'));
    setFeaturedDate(
      moment(featuredPost.date).locale(i18n.language).format('MMM DD, YYYY'),
    );
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
      <ContentContainer className={styles.postsBlock}>
        <div className={styles.featuredBlock}>
          <Typography variant="head2">{t('posts.featuredPost')}</Typography>
          <div className={styles.featuredInfo}>
            <figure className={styles.featuredImage}>
              <Image
                src={featuredPost.image}
                alt="Featured"
              />
            </figure>
            <Typography
              className={styles.postInfo}
              variant="body2">
              By{' '}
              <Typography
                className={styles.author}
                variant="body2">
                {featuredPost.author.name}
              </Typography>{' '}
              | {date}
            </Typography>
            <Typography variant="head2">{featuredPost.title}</Typography>
            <Typography
              className={styles.postText}
              variant="body1">
              {featuredPost.text[0][1]}
            </Typography>
            <Link href={`${routes.Blog}/${featuredPost.id}`}>
              <Button>
                <Typography variant="head5">
                  {t('posts.readMore')} {'>'}
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.allPosts}>
          <div className={styles.title}>
            <Typography variant="head2">{t('posts.allPosts')}</Typography>
            <Link href={routes.Blog}>
              <Typography variant="body1">View All</Typography>
            </Link>
          </div>
          <div className={styles.postsContainer}>
            {getPagePosts(1).map((post) => (
              <PostCard
                key={post.id}
                variant="small"
                post={post}
              />
            ))}
          </div>
        </div>
      </ContentContainer>
      <JoinUs />
    </div>
  );
};

export default HomePage;
