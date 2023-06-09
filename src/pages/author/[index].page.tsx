'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { getAuthorsPosts } from '@helpers/posts';
import { Typography } from 'components-wil';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { PostCard, SocialWrapper } from '@components';
import { authors } from '@constants';
import ContentContainer from '@containers/ContentContainer';

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
    <main>
      <ContentContainer
        className={styles.authorBock}
        variant="variant2">
        <article className={styles.info}>
          <figure>
            <Image
              src={avatar}
              alt="Avatar"
            />
          </figure>
          <summary className={styles.authorInfo}>
            <Typography variant="head2">{t('author.hi', { name })}</Typography>
            <Typography variant="body1">{description}</Typography>
            <SocialWrapper links={social} />
          </summary>
        </article>
      </ContentContainer>
      <ContentContainer
        className={styles.posts}
        variant="variant2">
        <Typography variant="head2">{t('author.myPosts')}</Typography>
        <section className={styles.list}>
          {postsByAuthor.map((post) => (
            <PostCard
              key={post.id}
              variant="large"
              post={post}
            />
          ))}
        </section>
      </ContentContainer>
    </main>
  );
};

export default HomePage;
