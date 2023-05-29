import React, { type FC } from 'react';
import moment from 'moment';
import Image from 'next/image';

import type IBlogPostInfo from '@components/BlogPostInfo/types';
import Label from '@components/Label';
import Typography from '@components/Typography';

import styles from './blogPostInfo.module.scss';

const BlogPostInfo: FC<IBlogPostInfo> = ({
  postedDate,
  postTitle,
  authorName,
  authorAvatar,
  category,
}) => (
  <div className={styles.blogPostInfo}>
    <div className={styles.authorAndTime}>
      <div className={styles.imageContainer}>
        <Image
          src={authorAvatar}
          alt="Author image"
        />
      </div>
      <Typography
        className={styles.authorName}
        variant="head3">
        {authorName}
      </Typography>
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

export default BlogPostInfo;
