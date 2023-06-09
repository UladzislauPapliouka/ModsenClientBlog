'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Tag, Typography } from 'components-wil';
import { useRouter } from 'next/router';

import { Categories, type IPostWithId, Tags } from '@/types';
import { CategoriesList, PostCard } from '@components';
import Search from '@components/Search';
import { LOAD_DATA_DELAY, PAGE_SIZE } from '@constants/numbers';
import ContentContainer from '@containers/ContentContainer';
import { getPosts } from '@services/posts';
import { changeTags, filterTagsValue } from '@services/tags';

import styles from './category.module.scss';

const BlogPost = (): JSX.Element => {
  const router = useRouter();

  const [posts, setPosts] = useState<IPostWithId[]>([]);

  const [isAllPost, setIsAllPosts] = useState(false);

  const [t] = useTranslation();

  const { tags, category } = router.query;

  useEffect(() => {
    const posts = getPosts(
      (tags as string)?.split('&') ?? [],
      category as string,
    ).slice(0, PAGE_SIZE);

    setIsAllPosts(posts.length === 0);

    setPosts(posts);
  }, [category, tags]);

  const loadMorePosts = () => {
    setTimeout(() => {
      const posts = getPosts(
        (tags as string)?.split('&') ?? [],
        category as string,
      ).slice(PAGE_SIZE);

      setIsAllPosts(true);

      setPosts((prevState) => prevState.concat(posts));
    }, LOAD_DATA_DELAY);
  };

  if (!Object.values(Categories).includes(category as Categories)) {
    return (
      <ContentContainer>
        <Typography variant="head1">{`We don't have such category`}</Typography>
      </ContentContainer>
    );
  }

  const addTagFilter = (tagName: `${Tags}`) => {
    if (!tags?.includes(tagName)) {
      changeTags(
        'tags',
        !tags ? tagName : (tags.concat('&', tagName) as string),
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
            {t(`categories.${category}.title`)}
          </Typography>
          <Typography variant="body1">
            {t(`categories.${category}.text`)}
          </Typography>
          <Typography variant="head6">{`${t('category.blog')} > ${t(
            `categories.${category}.title`,
          )}`}</Typography>
        </ContentContainer>
      </div>
      <ContentContainer className={styles.postsBlock}>
        <div className={styles.postsContainer}>
          <InfiniteScroll
            next={loadMorePosts}
            hasMore={!isAllPost}
            loader={<h4>Loading...</h4>}
            dataLength={posts.length}>
            {posts.length ? (
              posts.map((post) => (
                <PostCard
                  key={post.id}
                  variant="large"
                  post={post}
                />
              ))
            ) : (
              <Typography variant="head5">{t('category.no')}</Typography>
            )}
          </InfiniteScroll>
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
            currentLabel={category as `${Categories}`}
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
