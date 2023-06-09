import React, { type FC } from 'react';
import { Typography } from 'components-wil';
import moment from 'moment';
import Image from 'next/image';

import type IBlogPostInfo from '@components/BlogPostInfo/types';
import Label from '@components/Label';
import Link from '@components/Link';
import routes from '@constants/routes';

import styles from './blogPostInfo.module.scss';

const BlogPostInfo: FC<IBlogPostInfo> = ({
  postedDate,
  postTitle,
  category,
  author: { avatar, id, name },
}) => (
  <div className={styles.blogPostInfo}>
    <div className={styles.authorAndTime}>
      <div className={styles.imageContainer}>
        <Image
          src={avatar}
          alt="Author image"
        />
      </div>
      <Link href={`${routes.author}/${id}`}>
        <Typography
          className={styles.authorName}
          variant="head3">
          {name}
        </Typography>
      </Link>
      <Typography
        className={styles.postedTime}
        variant="body1">
        Posted on {`${moment(postedDate).format('Do MMMM YYYY')}`}
      </Typography>
    </div>
    <Typography variant="head1">{postTitle}</Typography>
    <div className={styles.labels}>
      <Label label={category} />
    </div>
  </div>
);

export default React.memo(BlogPostInfo);
