import React, { type FC } from 'react';
import moment from 'moment';
import Image from 'next/image';

import type IBlogPostInfo from '@components/BlogPostInfo/types';
import Label from '@components/Label';
import Link from '@components/Link';
import Typography from '@components/Typography';
import routes from '@constants/routes';

import styles from './blogPostInfo.module.scss';

const BlogPostInfo: FC<IBlogPostInfo> = ({
  postedDate,
  postTitle,
  author,
  category,
}) => (
  <div className={styles.blogPostInfo}>
    <div className={styles.authorAndTime}>
      <div className={styles.imageContainer}>
        <Image
          src={author.avatar}
          alt="Author image"
        />
      </div>
      <Link href={`${routes.author}/${author.id}`}>
        <Typography
          className={styles.authorName}
          variant="head3">
          {author.name}
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

export default BlogPostInfo;
