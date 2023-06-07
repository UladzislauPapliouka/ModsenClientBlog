'use client';

import React, { useEffect, useState, useTransition } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import Search from 'components/Search';
import { type Router, useRouter } from 'next/router';

import { Categories, type IPostWithId, Tags } from '@/types';
import Button from '@components/Button';
import CategoriesList from '@components/CategoriesList';
import PostCard from '@components/PostCard';
import Tag from '@components/Tag';
import Typography from '@components/Typography';
import PAGE_SIZE from '@constants/numbers';
import ContentContainer from '@containers/ContentContainer';
import { getPagePosts, getPosts, getPostsWithId } from '@services/posts';
import { changeTags, filterTagsValue } from '@services/tags';

import styles from './category.module.scss';

const BlogPost = (): JSX.Element => {
  const router = useRouter();

  const [posts, setPosts] = useState<IPostWithId[]>([]);

  const [page, setPage] = useState(1);

  const [isAllPost, setIsAllPosts] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const [t] = useTranslation();

  const { tags, category } = router.query;

  useEffect(() => {
    const posts = getPosts(
      (tags as string)?.split('&') ?? [],
      category as string,
    ).slice(0, PAGE_SIZE);

    setIsAllPosts(posts.length === 0);
    setPosts(posts);
  }, [category]);
  const loadMorePosts = () => {
    setLoading(true);
    setTimeout(() => {
      const posts = getPosts(
        (tags as string)?.split('&') ?? [],
        category as string,
      ).slice(page * PAGE_SIZE, page + 1 * PAGE_SIZE);

      setIsAllPosts(posts.length === 0);
      setPosts((prevState) => prevState.concat(posts));
      setPage(page + 1);
      setLoading(false);
    }, 1500);
  };

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
      changeTags(
        'tags',
        !router.query.tags
          ? tagName
          : (router.query.tags.concat('&', tagName) as string),
        router,
      );
    } else if (typeof tags === 'string') {
      changeTags('tags', filterTagsValue(tags, tagName), router);
    }
  };

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
            <Typography variant="head5">There are no posts</Typography>
          )}
          {!isAllPost && (
            <Button onClick={loadMorePosts}>
              {isLoading ? 'Loading' : 'Load more'}
            </Button>
          )}
        </div>

        <div className={styles.filter}>
          <Search
            placeholder={t('category.placeholder')}
            onChoose={(value) => {
              addTagFilter(value as `${Tags}`);
            }}
            variants={Object.values(Tags)}
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
