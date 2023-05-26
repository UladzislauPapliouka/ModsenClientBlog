import React from 'react';
import moment from 'moment';
import Image from 'next/image';

import photo from '@assets/images/photo-of-woman-wearing-eyeglasses-3184405.png';
import Link from '@components/Link';
import Typography from '@components/Typography';
import routes from '@constants/routes';

import styles from './postCard.module.scss';

const PostCard = ({ large, post }: { large?: boolean; post: any }) =>
  large ? (
    <div className={styles.largePostCard}>
      <div className={styles.photoContainer}>
        <Image
          className={styles.postPhoto}
          src={post.image && photo}
          alt="Post photo"
        />
      </div>
      <div className={styles.infoContainer}>
        <Typography
          className={styles.postCategory}
          variant="body1">
          BUSINESS
        </Typography>
        <Typography variant="head3">
          A UX Case Study Creating a Studious Environment for Students:
        </Typography>
        <Typography
          className={styles.postText}
          variant="body1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
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

export default PostCard;
