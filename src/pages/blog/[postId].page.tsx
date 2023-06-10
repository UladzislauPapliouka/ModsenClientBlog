import React from 'react';
import { useTranslation } from 'react-i18next';
import { getWhatToReadNext } from '@helpers/posts';
import { Typography } from 'components-wil';
import i18n from 'i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { type IPost } from '@/types';
import { BlogPostInfo, JoinUs, PostCard } from '@components';
import { postsEn } from '@constants';
import ContentContainer from '@containers/ContentContainer';

import styles from './blogpost.module.scss';

const BlogPost = (): JSX.Element => {
  const {
    query: { postId },
  } = useRouter();

  const [t] = useTranslation();

  if (!postId) {
    return <div />;
  }

  if (!postsEn[postId as string]) {
    return (
      <ContentContainer>
        <Typography variant="head1">{`Post ${postId}  doesn't exist`}</Typography>
      </ContentContainer>
    );
  }

  const currentPost = i18n.getResourceBundle(i18n.language, '').postsAra[
    postId as string
  ] as IPost;

  const { title, date, image, author, category, text } = currentPost;

  return (
    <main>
      <ContentContainer variant="variant2">
        <BlogPostInfo
          postedDate={date}
          postTitle={title}
          author={author}
          category={category}
        />
      </ContentContainer>
      <ContentContainer
        className={styles.postImage}
        variant="variant1">
        <Image
          src={image}
          alt="Post image"
        />
      </ContentContainer>
      <ContentContainer
        className={styles.postText}
        variant="variant2">
        {text.map(([type, text]) => (
          <Typography
            key={text}
            variant={type}>
            {text}
          </Typography>
        ))}
      </ContentContainer>
      <ContentContainer>
        <Typography variant="head2">{t('posts.whatToRead')}</Typography>
        <div className={styles.postCards}>
          {getWhatToReadNext(currentPost).map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
        <hr className={styles.devider} />
      </ContentContainer>
      <JoinUs />
    </main>
  );
};

export default BlogPost;
