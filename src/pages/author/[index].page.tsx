import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import PostCard from '@components/PostCard';
import SocialWrapper from '@components/SocialWrapper';
import Typography from '@components/Typography';
import authors from '@constants/authors';
import ContentContainer from '@containers/ContentContainer';
import { getAuthorsPosts } from '@services/posts';

import styles from './author.module.scss';

const HomePage = (): JSX.Element => {
  const router = useRouter();

  const [t] = useTranslation();

  const author = authors[router.query.index as string];

  const postsByAuthor = getAuthorsPosts(router.query.index as string);

  if (!author) return <div />;

  if (!author) {
    return (
      <ContentContainer>
        <Typography variant="head1">{`We don't know him`}</Typography>
      </ContentContainer>
    );
  }

  return (
    <div>
      <ContentContainer
        className={styles.authorBock}
        variant="variant2">
        <div className={styles.info}>
          <figure>
            <Image
              src={author.avatar}
              alt="Avatar"
            />
          </figure>
          <div className={styles.authorInfo}>
            <Typography variant="head2">
              {t('author.hi', { name: author.name })}
            </Typography>
            <Typography variant="body1">{author.description}</Typography>
            <SocialWrapper links={author.social} />
          </div>
        </div>
      </ContentContainer>
      <ContentContainer
        className={styles.posts}
        variant="variant2">
        <Typography variant="head2">{t('author.myPosts')}</Typography>
        <div className={styles.list}>
          {postsByAuthor.map((post) => (
            <PostCard
              key={post.id}
              variant="large"
              post={post}
            />
          ))}
        </div>
      </ContentContainer>
    </div>
  );
};

export default HomePage;
