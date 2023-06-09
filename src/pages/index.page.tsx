import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getFeaturedPost, getLastPost, getPagePosts } from '@helpers/posts';
import { Button, Typography } from 'components-wil';
import moment from 'moment/moment';
import Image from 'next/image';

import arrow from '@assets/Arrow 1.svg';
import image from '@assets/images/close-up-photography-of-man-wearing-sunglasses-1212984.png';
import {
  AuthorsList,
  CategoriesList,
  JoinUs,
  Link,
  PostCard,
} from '@components';
import InfinityScroll from '@components/InfinityScroll';
import { routes, testimonials } from '@constants';
import ContentContainer from '@containers/ContentContainer';

import styles from './home.module.scss';

const HomePage = (): JSX.Element => {
  const [t, i18n] = useTranslation();

  const [date, setDate] = useState('');

  const [dateFeatured, setFeaturedDate] = useState('');

  const [testimonialIndex, setTestimonalIndex] = useState(0);

  const lastPost = getLastPost();

  const featuredPost = getFeaturedPost();

  useEffect(() => {
    setDate(moment(lastPost.date).locale(i18n.language).format('MMM DD, YYYY'));

    setFeaturedDate(
      moment(featuredPost.date).locale(i18n.language).format('MMM DD, YYYY'),
    );
  }, [i18n.language]);

  const nextTestimonal = () => {
    const lenth = testimonials.length;

    if (testimonialIndex + 1 > lenth - 1) {
      setTestimonalIndex(0);

      return;
    }

    setTestimonalIndex(testimonialIndex + 1);
  };

  const prevTestimonal = () => {
    const lenth = testimonials.length;

    if (testimonialIndex - 1 < 0) {
      setTestimonalIndex(lenth - 1);

      return;
    }

    setTestimonalIndex(testimonialIndex - 1);
  };

  return (
    <InfinityScroll wrapper={<main className={styles.page} />}>
      <article className={styles.mainPost}>
        <figure className={styles.mainPostImage}>
          <Image
            src={lastPost.image}
            alt="Main"
            priority
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
              By
              <Typography
                className={styles.author}
                variant="body1">
                <Link href={`${routes.author}/${lastPost.author.id}`}>
                  {lastPost.author.name}
                </Link>
              </Typography>
              | {dateFeatured}
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
      </article>
      <ContentContainer className={styles.postsBlock}>
        <div className={styles.featuredBlock}>
          <Typography variant="head2">{t('posts.featuredPost')}</Typography>
          <summary className={styles.featuredInfo}>
            <figure className={styles.featuredImage}>
              <Image
                src={featuredPost.image}
                alt="Featured"
              />
            </figure>
            <Typography
              className={styles.postInfo}
              variant="body2">
              By
              <Link href={`${routes.author}/${featuredPost.author.id}`}>
                <Typography
                  className={styles.author}
                  variant="body2">
                  {featuredPost.author.name}
                </Typography>
              </Link>
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
          </summary>
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
        <article className={styles.blocks}>
          <section>
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
          </section>

          <section>
            <Typography variant="head6">{t('home.aboutUs.mission')}</Typography>
            <Typography variant="head3">
              {t('home.aboutUs.missionTitle')}
            </Typography>
            <Typography variant="body1">
              {t('home.aboutUs.missionText')}
            </Typography>
          </section>
        </article>
      </ContentContainer>
      <ContentContainer className={styles.categories}>
        <Typography variant="head1"> {t('home.chooseCategory')}</Typography>
        <CategoriesList />
      </ContentContainer>
      <ContentContainer className={styles.whyWeStartedBlock}>
        <article className={styles.whyInfo}>
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
        </article>
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
        <article className={styles.testimonials}>
          <summary className={styles.constant}>
            <Typography variant="head4">
              {t('home.testimonials.name')}
            </Typography>
            <Typography variant="head2">
              {t('home.testimonials.title')}
            </Typography>
            <Typography variant="body1">
              {t('home.testimonials.text')}
            </Typography>
          </summary>
          <div className={styles.comment}>
            <Typography variant="head5">
              {testimonials[testimonialIndex].text}
            </Typography>
            <div className={styles.lowBlock}>
              <div className={styles.user}>
                <Image
                  src={testimonials[testimonialIndex].image}
                  alt="Avatar"
                />
                <summary className={styles.userInfo}>
                  <Typography variant="head5">
                    {testimonials[testimonialIndex].author}
                  </Typography>
                  <Typography variant="body1">
                    {testimonials[testimonialIndex].place}
                  </Typography>
                </summary>
              </div>
              <div className={styles.control}>
                <div
                  className={styles.back}
                  onClick={prevTestimonal}>
                  <Image
                    src={arrow}
                    alt="arrow"
                  />
                </div>
                <div
                  className={styles.next}
                  onClick={nextTestimonal}>
                  <Image
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </ContentContainer>
      <JoinUs />
    </InfinityScroll>
  );
};

export default HomePage;
