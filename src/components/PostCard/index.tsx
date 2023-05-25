import React from 'react';
import Image from 'next/image';

import photo from '@assets/images/photo-of-woman-wearing-eyeglasses-3184405.png';
import Typography from '@components/Typography';

import styles from './postCard.module.scss';

const PostCard = ({ large }: { large?: boolean }) =>
  large ? (
    <div className={styles.largePostCard}>
      <div className={styles.photoContainer}>
        <Image
          className={styles.postPhoto}
          src={photo}
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
          src={photo}
          alt="Post photo"
        />
      </div>
      <Typography
        className={styles.postInfo}
        variant="body2">
        By John Doe | Aug 23, 2021{' '}
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
  );

export default PostCard;
