import React from 'react';
import Image from 'next/image';

import avatar from '@assets/images/avatars/Image.png';
import Label from '@components/Label';
import Typography from '@components/Typography';

import styles from './blogPostInfo.module.scss';

const BlogPostInfo = () => (
  <div className={styles.blogPostInfo}>
    <div className={styles.authorAndTime}>
      <Image
        src={avatar}
        alt="Author image"
      />
      <Typography
        className={styles.authorName}
        variant="head3">
        Andrew Jonson
      </Typography>
      <Typography
        className={styles.postedTime}
        variant="body1">
        Posted on 27th January 2022
      </Typography>
    </div>
    <Typography variant="head1">
      Step-by-step guide to choosing great font pairs
    </Typography>
    <div className={styles.labels}>
      <Label label="startup" />
      <Label label="economy" />
      <Label label="technology" />
    </div>
  </div>
);

export default BlogPostInfo;
