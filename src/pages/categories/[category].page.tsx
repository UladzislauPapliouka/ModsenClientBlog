import React from 'react';
import { useTranslation } from 'react-i18next';
import Search from 'components/Search';
import { useRouter } from 'next/router';

import CategoriesList from '@components/CategoriesList';
import PostCard from '@components/PostCard';
import Tag from '@components/Tag';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';
import { getPagePosts, getWhatToReadNext } from '@services/posts';

import styles from './category.module.scss';

const BlogPost = (): JSX.Element => {
  const router = useRouter();

  const [t] = useTranslation();

  if (!router.query.category) {
    return <div />;
  }

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
          {getPagePosts(1).map((post) => (
            <PostCard
              key={post.id}
              variant="large"
              post={post}
            />
          ))}
        </div>

        <div className={styles.filter}>
          <Search
            placeholder={t('category.placeholder')}
            onChoose={(value) => {
              console.log(value);
            }}
            variants={['business', 'tech', 'economy']}
          />
          <Typography variant="head2">{t('category.categories')}</Typography>
          <CategoriesList small />
          <Typography variant="head2">{t('category.allTags')}</Typography>
          <div className={styles.tagsContainer}>
            <Tag text="Business" />
            <Tag text="Economy" />
            <Tag text="Technologies" />
            <Tag text="Startup" />
            <Tag text="Life" />
            <Tag text="Marketing" />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default BlogPost;
