import React from 'react';
import Image from 'next/image';

import img from '@assets/images/photo-of-woman-wearing-eyeglasses-3184405.png';
import Button from '@components/Button';
import JoinUs from '@components/JoinUs';
import PostCard from '@components/PostCard';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';

import styles from './blog.module.scss';

const BlogPage = () => (
  <div>
    <ContentContainer className={styles.featuredPost}>
      <div className={styles.featuredInfo}>
        <Typography variant="head6">FEATURED POST</Typography>
        <Typography variant="head2">
          Step-by-step guide to choosing great font pairs
        </Typography>
        <Typography
          className={styles.postInfo}
          variant="body2">
          By{' '}
          <Typography
            className={styles.author}
            variant="body2">
            John Doe
          </Typography>{' '}
          | Aug 23, 2021
        </Typography>
        <Typography
          className={styles.postText}
          variant="body1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </Typography>
        <Button>
          <Typography variant="head5">Read more {'>'}</Typography>
        </Button>
      </div>
      <div className={styles.featuredImage}>
        <Image
          src={img}
          alt="Featured"
        />
      </div>
    </ContentContainer>
    <ContentContainer className={styles.allPosts}>
      <Typography variant="head1">All posts</Typography>
      <hr className={styles.devider} />
      <div className={styles.postsContainer}>
        <PostCard large />
        <PostCard large />
        <PostCard large />
        <PostCard large />
      </div>
      <div className={styles.pagination}>
        <Typography variant="head4">{'< Prev'}</Typography>
        <Typography variant="head3">{'Next >'}</Typography>
      </div>
    </ContentContainer>
    <JoinUs />
  </div>
);

export default BlogPage;
