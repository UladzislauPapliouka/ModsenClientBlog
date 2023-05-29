import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Image from 'next/image';

import { type IPostWithId } from '@/types';
import Link from '@components/Link';
import Typography from '@components/Typography';
import routes from '@constants/routes';

import styles from './postCard.module.scss';

const PostCard = ({ large, post }: { large?: boolean; post: IPostWithId }) => {
  const [t] = useTranslation();

  return large ? (
    <div className={styles.largePostCard}>
      <div className={styles.photoContainer}>
        <Image
          className={styles.postPhoto}
          src={post.image}
          alt="Post photo"
        />
      </div>
      <div className={styles.infoContainer}>
        <Typography
          className={styles.postCategory}
          variant="body1">
          {t(`categories.${post.category}.title`).toUpperCase()}
        </Typography>
        <Link href={`${routes.Blog}/${post.id}`}>
          <Typography variant="head3">{post.title}</Typography>
        </Link>
        <Typography
          className={styles.postText}
          variant="body1">
          {post.text[0][1]}
        </Typography>
      </div>
    </div>
  ) : (
    <div className={styles.postCard}>
      <div className={styles.photoContainer}>
        <Image
          className={styles.postPhoto}
          src={post.image}
          alt="Post photo"
        />
      </div>
      <Typography
        className={styles.postInfo}
        variant="body2">
        By{' '}
        <Typography
          className={styles.authorName}
          variant="body2">
          {post.author.name}
        </Typography>{' '}
        | {moment(post.date).format('MMM DD, YYYY')}
      </Typography>
      <Link href={`${routes.Blog}/${post.id}`}>
        <Typography variant="head3">{post.title}</Typography>
      </Link>
      <Typography
        className={styles.postText}
        variant="body1">
        {post.text[0][1]}
      </Typography>
    </div>
  );
};

export default PostCard;
