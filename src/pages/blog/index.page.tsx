import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@components/Button';
import CategoriesList from '@components/CategoriesList';
import JoinUs from '@components/JoinUs';
import Link from '@components/Link';
import PostCard from '@components/PostCard';
import Typography from '@components/Typography';
import routes from '@constants/routes';
import ContentContainer from '@containers/ContentContainer';
import { getFeaturedPost, getPagePosts } from '@services/posts';

import styles from './blog.module.scss';

const BlogPage = () => {
  const featuredPost = getFeaturedPost();

  const router = useRouter();

  const [t, i18n] = useTranslation();

  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(
      moment(featuredPost.date).locale(i18n.language).format('MMM DD, YYYY'),
    );
  }, [i18n.language]);
  const goToNextPage = () => {
    router
      .push(
        {
          pathname: router.pathname,
          query: {
            page:
              router.query.page &&
              Number.parseInt(router.query.page as string, 10) > 1
                ? Number.parseInt(router.query.page as string, 10) - 1
                : 1,
          },
        },
        undefined,
        { shallow: true },
      )
      .catch(() => toast.error('Something went wrong...'));
  };

  const goToPrevPage = () => {
    router
      .push(
        {
          pathname: router.pathname,
          query: {
            page: router.query.page
              ? Number.parseInt(router.query.page as string, 10) + 1
              : 2,
          },
        },
        undefined,
        { shallow: true },
      )
      .catch(() => toast.error('Something went wrong...'));
  };

  return (
    <div>
      <ContentContainer className={styles.featuredPost}>
        <div className={styles.featuredInfo}>
          <Typography variant="head6">{t('posts.featuredPost')}</Typography>
          <Typography variant="head2">{featuredPost.title}</Typography>
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
        <div className={styles.featuredImage}>
          <Image
            src={featuredPost.image}
            alt="Featured"
          />
        </div>
      </ContentContainer>
      <ContentContainer className={styles.allPosts}>
        <Typography variant="head1">{t('posts.allPosts')}</Typography>
        <hr className={styles.devider} />
        <div className={styles.postsContainer}>
          {getPagePosts(
            Number.parseInt(router.query.page as string, 10) || 1,
          ).map((post) => (
            <PostCard
              key={post.id}
              variant="large"
              post={post}
            />
          ))}
        </div>
        <div className={styles.pagination}>
          <Typography
            variant="head4"
            onClick={goToNextPage}>
            {`<  ${t('posts.prev')}`}
          </Typography>
          <Typography
            variant="head3"
            onClick={goToPrevPage}>
            {`${t('posts.next')} >`}
          </Typography>
        </div>
      </ContentContainer>
      <ContentContainer>
        <Typography variant="head1"> {t('posts.allCategories')}</Typography>
        <CategoriesList />
      </ContentContainer>
      <JoinUs />
    </div>
  );
};

export default BlogPage;
