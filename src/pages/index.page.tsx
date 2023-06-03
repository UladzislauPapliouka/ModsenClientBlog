import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment/moment';
import Image from 'next/image';

import arrow from '@assets/Arrow 1.svg';
import image1 from '@assets/images/avatars/AndrewJonson.png';
import image from '@assets/images/close-up-photography-of-man-wearing-sunglasses-1212984.png';
import AuthorsList from '@components/AuthorsList';
import Button from '@components/Button';
import CategoriesList from '@components/CategoriesList';
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
              <Typography variant="body1">{t('posts.viewAll')}</Typography>
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
      <ContentContainer className={styles.aboutUs}>
        <div>
          <Typography variant="head6">{t('home.aboutUs.title')}</Typography>
          <Typography variant="head2">
            {t('home.aboutUs.ourDescriptionTitle')}
          </Typography>
          <Typography variant="body1">
            {t('home.aboutUs.ourDescriptionText')}
          </Typography>
          <Link href={routes['About Us']}>
            <Typography variant="head6">
              {t('posts.readMore')} {'>'}
            </Typography>
          </Link>
        </div>
        <div>
          <Typography variant="head6">{t('home.aboutUs.mission')}</Typography>
          <Typography variant="head3">
            {t('home.aboutUs.missionTitle')}
          </Typography>
          <Typography variant="body1">
            {t('home.aboutUs.missionText')}
          </Typography>
        </div>
      </ContentContainer>
      <ContentContainer className={styles.categories}>
        <Typography variant="head1"> {t('home.chooseCategory')}</Typography>
        <CategoriesList />
      </ContentContainer>
      <ContentContainer className={styles.whyWeStartedBlock}>
        <div className={styles.whyInfo}>
          <Typography variant="head6">{t('home.whyWeStarted.why')}</Typography>
          <Typography variant="head2">
            {t('home.whyWeStarted.title')}
          </Typography>
          <Typography variant="body1">{t('home.whyWeStarted.text')}</Typography>
          <Link href={`${routes['About Us']}`}>
            <Button>
              <Typography variant="head5">
                {t('home.whyWeStarted.button')} {'>'}
              </Typography>
            </Button>
          </Link>
        </div>
        <figure className={styles.teamImage}>
          <Image
            src={image}
            alt="Team"
          />
        </figure>
      </ContentContainer>
      <ContentContainer className={styles.authors}>
        <Typography variant="head2">{t('home.listOfAuthors')}</Typography>
        <AuthorsList />
      </ContentContainer>
      <ContentContainer>
        <div className={styles.testimonials}>
          <div className={styles.constant}>
            <Typography variant="head4">Testimonials</Typography>
            <Typography variant="head2">
              What people say about our blog
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Typography>
          </div>
          <div className={styles.comment}>
            <Typography variant="head5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <div className={styles.lowBlock}>
              <div className={styles.user}>
                <Image
                  src={image1}
                  alt="Avatar"
                />
                <div className={styles.userInfo}>
                  <Typography variant="head5">Jonathan Vallem</Typography>
                  <Typography variant="body1">New york, USA</Typography>
                </div>
              </div>
              <div className={styles.control}>
                <div className={styles.back}>
                  <Image
                    src={arrow}
                    alt="arrow"
                  />
                </div>
                <div className={styles.next}>
                  <Image
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
      <JoinUs />
    </div>
  );
};

export default HomePage;
