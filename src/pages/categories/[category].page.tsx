import React from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import Search from 'components/Search';
import i18n from 'i18next';
import { useRouter } from 'next/router';

import { Categories, type IPostWithId, Tags } from '@/types';
import CategoriesList from '@components/CategoriesList';
import PostCard from '@components/PostCard';
import Tag from '@components/Tag';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';
import { getPagePosts, getPostsWithId } from '@services/posts';

import styles from './category.module.scss';

const BlogPost = (): JSX.Element => {
  const router = useRouter();

  const [t] = useTranslation();

  if (!router.query.category) {
    return <div />;
  }

  if (
    !Object.values(Categories).includes(router.query.category as Categories)
  ) {
    return (
      <ContentContainer>
        <Typography variant="head1">{`We don't have such category`}</Typography>
      </ContentContainer>
    );
  }

  const addTagFilter = (tagName: `${Tags}`) => {
    const { tags } = router.query;

    if (!tags?.includes(tagName)) {
      router
        .push(
          {
            pathname: router.pathname,
            query: {
              category: router.query.category,
              tags: !router.query.tags
                ? tagName
                : router.query.tags.concat('&', tagName),
            },
          },
          undefined,
          { shallow: true },
        )
        .catch(() => toast.error('Something went wrong...'));
    } else if (typeof tags === 'string') {
      const newTags = tags
        ?.split('&')
        .filter((tag) => tag !== tagName)
        .join('&');

      router
        .push(
          {
            pathname: router.pathname,
            query: {
              category: router.query.category,
              tags: newTags,
            },
          },
          undefined,
          { shallow: true },
        )
        .catch(() => toast.error('Something went wrong...'));
    }
  };

  const { tags, category } = router.query;

  function contains(where: string[], what: string[]) {
    if (!what || !what.length || what[0] === '') return true;

    if (!where || !what.length) return false;

    for (let i = 0; i < what.length; i += 1) {
      if (!where.includes(what[i])) return false;
    }

    return true;
  }

  const getPosts = (tags: string[]) => {
    if (!tags.length || !tags) {
      return getPagePosts(1).filter((post) => post.category === category);
    }

    return getPostsWithId().filter(
      (post) =>
        contains(post.tags as string[], tags) && post.category === category,
    );
  };

  const posts = getPosts((tags as string)?.split('&') ?? []);

  return (
    <div>
      <div className={styles.pageHeader}>
        <ContentContainer variant="variant2">
          <Typography variant="head1">
            {t(`categories.${router.query.category}.title`)}
          </Typography>
          <Typography variant="body1">
            {t(`categories.${router.query.category}.text`)}
          </Typography>
          <Typography variant="head6">{`${t('category.blog')} > ${t(
            `categories.${router.query.category}.title`,
          )}`}</Typography>
        </ContentContainer>
      </div>
      <ContentContainer className={styles.postsBlock}>
        <div className={styles.postsContainer}>
          {posts.length ? (
            posts.map((post) => (
              <PostCard
                key={post.id}
                variant="large"
                post={post}
              />
            ))
          ) : (
            <Typography variant="head5">test</Typography>
          )}
        </div>

        <div className={styles.filter}>
          <Search
            placeholder={t('category.placeholder')}
            onChoose={(value) => {
              addTagFilter(value as `${Tags}`);
            }}
            variants={['business', 'tech', 'economy']}
          />
          <Typography variant="head2">{t('category.categories')}</Typography>
          <CategoriesList
            currentLabel={router.query.category as `${Categories}`}
            small
          />
          <Typography variant="head2">{t('category.allTags')}</Typography>
          <div className={styles.tagsContainer}>
            {Object.values(Tags).map((tag) => (
              <Tag
                key={tag}
                text={tag}
                onClick={addTagFilter}
                active={(tags as string)?.split('&').includes(tag)}
              />
            ))}
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default BlogPost;
