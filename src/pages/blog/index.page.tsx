import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { getFeaturedPost, getPagePosts } from '@helpers/posts';
import { Button, Typography } from 'components-wil';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { CategoriesList, JoinUs, Link, PostCard } from '@components';
import { FIRST_PAGE_INDEX, routes, SECOND_PAGE_INDEX } from '@constants';
import ContentContainer from '@containers/ContentContainer';

import styles from './blog.module.scss';

const BlogPage = () => {
  const {
    text,
    author: { name },
    date,
    image,
    id,
    title,
  } = getFeaturedPost();

  const router = useRouter();

  const {
    pathname,
    query: { page },
  } = router;

  const [t, i18n] = useTranslation();

  const [parsedDate, setParsedDate] = useState('');

  useEffect(() => {
    setParsedDate(moment(date).locale(i18n.language).format('MMM DD, YYYY'));
  }, [i18n.language]);

  const goToPrevPage = () => {
    router
      .push(
        {
          pathname,
          query: {
            page:
              page && Number.parseInt(page as string, 10) > 1
                ? Number.parseInt(page as string, 10) - 1
                : FIRST_PAGE_INDEX,
          },
        },
        undefined,
        { shallow: true },
      )
      .catch(() => toast.error('Something went wrong...'));
  };

  const goToNextPage = () => {
    router
      .push(
        {
          pathname,
          query: {
            page: page
              ? Number.parseInt(page as string, 10) + 1
              : SECOND_PAGE_INDEX,
          },
        },
        undefined,
        { shallow: true },
      )
      .catch(() => toast.error('Something went wrong...'));
  };

  return (
    <main>
      <ContentContainer className={styles.featuredPost}>
        <article className={styles.featuredInfo}>
          <Typography variant="head6">{t('posts.featuredPost')}</Typography>
          <Typography variant="head2">{title}</Typography>
          <Typography
            className={styles.postInfo}
            variant="body2">
            By
            <Typography
              className={styles.author}
              variant="body2">
              {name}
            </Typography>
            | {parsedDate}
          </Typography>
          <Typography
            className={styles.postText}
            variant="body1">
            {text[0][1]}
          </Typography>
          <Link href={`${routes.Blog}/${id}`}>
            <Button>
              <Typography variant="head5">
                {t('posts.readMore')} {'>'}
              </Typography>
            </Button>
          </Link>
        </article>
        <figure className={styles.featuredImage}>
          <Image
            src={image}
            alt="Featured"
          />
        </figure>
      </ContentContainer>
      <ContentContainer className={styles.allPosts}>
        <Typography variant="head1">{t('posts.allPosts')}</Typography>
        <hr className={styles.devider} />
        <article className={styles.postsContainer}>
          {getPagePosts(Number.parseInt(page as string, 10) || 1).map(
            (post) => (
              <PostCard
                key={post.id}
                variant="large"
                post={post}
              />
            ),
          )}
        </article>
        <div className={styles.pagination}>
          <Typography
            variant="head4"
            onClick={goToPrevPage}>
            {`<  ${t('posts.prev')}`}
          </Typography>
          <Typography
            variant="head3"
            onClick={goToNextPage}>
            {`${t('posts.next')} >`}
          </Typography>
        </div>
      </ContentContainer>
      <ContentContainer>
        <Typography variant="head1"> {t('posts.allCategories')}</Typography>
        <CategoriesList />
      </ContentContainer>
      <JoinUs />
    </main>
  );
};

export default BlogPage;
