'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'components-wil';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { PostCard, SocialWrapper } from '@components';
import authors from '@constants/authors';
import ContentContainer from '@containers/ContentContainer';
import { getAuthorsPosts } from '@services/posts';

import styles from './author.module.scss';

const HomePage = (): JSX.Element => {
  const {
    query: { index },
  } = useRouter();

  const [t] = useTranslation();

  if (!authors[index as string]) {
    return (
      <ContentContainer>
        <Typography variant="head1">{`We don't know him`}</Typography>
      </ContentContainer>
    );
  }

  const { name, avatar, social, description } = authors[index as string];

  const postsByAuthor = getAuthorsPosts(index as string);

  return (
    <div>
      <ContentContainer
        className={styles.authorBock}
        variant="variant2">
        <div className={styles.info}>
          <figure>
            <Image
              src={avatar}
              alt="Avatar"
            />
          </figure>
          <div className={styles.authorInfo}>
            <Typography variant="head2">{t('author.hi', { name })}</Typography>
            <Typography variant="body1">{description}</Typography>
            <SocialWrapper links={social} />
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
