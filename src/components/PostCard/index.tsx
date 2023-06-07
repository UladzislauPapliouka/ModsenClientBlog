import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Image from 'next/image';

import Link from '@components/Link';
import type IPostcard from '@components/PostCard/types';
import Typography from '@components/Typography';
import routes from '@constants/routes';

import styles from './postCard.module.scss';

const PostCard: FC<IPostcard> = ({
  variant,
  post: { category, id, author, title, image, date, text },
}) => {
  const [t] = useTranslation();

  switch (variant) {
    case 'small':
      return (
        <div className={styles.smallPostCard}>
          <Typography
            className={styles.postInfo}
            variant="body2">
            By
            <Link href={`${routes.author}/${author.id}`}>
              <Typography
                className={styles.authorName}
                variant="body2">
                {author.name}
              </Typography>
            </Link>
            | {moment(date).format('MMM DD, YYYY')}
          </Typography>
          <Link href={`${routes.Blog}/${id}`}>
            <Typography variant="head3">{title}</Typography>
          </Link>
        </div>
      );

    case 'large':
      return (
        <div className={styles.largePostCard}>
          <div className={styles.photoContainer}>
            <Image
              className={styles.postPhoto}
              src={image}
              alt="Post photo"
            />
          </div>
          <div className={styles.infoContainer}>
            <Typography
              className={styles.postCategory}
              variant="body1">
              {t(`categories.${category}.title`).toUpperCase()}
            </Typography>
            <Link href={`${routes.Blog}/${id}`}>
              <Typography variant="head3">{title}</Typography>
            </Link>
            <Typography
              className={styles.postText}
              variant="body1">
              {text[0][1]}
            </Typography>
          </div>
        </div>
      );

    default:
      return (
        <div className={styles.postCard}>
          <div className={styles.photoContainer}>
            <Image
              className={styles.postPhoto}
              src={image}
              alt="Post photo"
            />
          </div>
          <Typography
            className={styles.postInfo}
            variant="body2">
            By
            <Link href={`${routes.author}/${author.id}`}>
              <Typography
                className={styles.authorName}
                variant="body2">
                {author.name}
              </Typography>
            </Link>
            | {moment(date).format('MMM DD, YYYY')}
          </Typography>
          <Link href={`${routes.Blog}/${id}`}>
            <Typography variant="head3">{title}</Typography>
          </Link>
          <Typography
            className={styles.postText}
            variant="body1">
            {text[0][1]}
          </Typography>
        </div>
      );
  }
};

export default PostCard;
