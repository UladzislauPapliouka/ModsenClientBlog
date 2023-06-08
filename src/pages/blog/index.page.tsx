import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  Button,
  CategoriesList,
  JoinUs,
  Link,
  PostCard,
  Typography,
} from '@components';
import { FIRST_PAGE_INDEX, SECOND_PAGE_INDEX } from '@constants/numbers';
import routes from '@constants/routes';
import ContentContainer from '@containers/ContentContainer';
import { getFeaturedPost, getPagePosts } from '@services/posts';

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
    <div>
      <ContentContainer className={styles.featuredPost}>
        <div className={styles.featuredInfo}>
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
        </div>
        <div className={styles.featuredImage}>
          <Image
            src={image}
            alt="Featured"
          />
        </div>
      </ContentContainer>
      <ContentContainer className={styles.allPosts}>
        <Typography variant="head1">{t('posts.allPosts')}</Typography>
        <hr className={styles.devider} />
        <div className={styles.postsContainer}>
          {getPagePosts(Number.parseInt(page as string, 10) || 1).map(
            (post) => (
              <PostCard
                key={post.id}
                variant="large"
                post={post}
              />
            ),
          )}
        </div>
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
    </div>
  );
};

export default BlogPage;
