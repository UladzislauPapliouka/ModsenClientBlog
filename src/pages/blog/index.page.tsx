import React from 'react';
import moment from 'moment';
import Image from 'next/image';

import img from '@assets/images/photo-of-woman-wearing-eyeglasses-3184405.png';
import Button from '@components/Button';
import Category from '@components/Category';
import JoinUs from '@components/JoinUs';
import Link from '@components/Link';
import PostCard from '@components/PostCard';
import Typography from '@components/Typography';
import posts from '@constants/posts';
import routes from '@constants/routes';
import ContentContainer from '@containers/ContentContainer';

import styles from './blog.module.scss';

const BlogPage = () => {
  const featuredPost = Object.keys(posts)
    .map((postId) => ({ id: postId, ...posts[postId] }))
    .reduce((prev, curr) => (curr.views > prev.views ? curr : prev), {
      id: '1',
      ...posts['1'],
    });

  return (
    <div>
      <ContentContainer className={styles.featuredPost}>
        <div className={styles.featuredInfo}>
          <Typography variant="head6">FEATURED POST</Typography>
          <Typography variant="head2">{featuredPost.title}</Typography>
          <Typography
            className={styles.postInfo}
            variant="body2">
            By{' '}
            <Typography
              className={styles.author}
              variant="body2">
              {featuredPost.author.name}
            </Typography>{' '}
            | {moment(featuredPost.date).format('MMM DD, YYYY')}
          </Typography>
          <Typography
            className={styles.postText}
            variant="body1">
            {featuredPost.text[0][1]}
          </Typography>
          <Link href={`${routes.Blog}/${featuredPost.id}`}>
            <Button>
              <Typography variant="head5">Read more {'>'}</Typography>
            </Button>
          </Link>
        </div>
        <div className={styles.featuredImage}>
          <Image
            src={featuredPost.image}
            alt="Featured"
          />
        </div>
      </ContentContainer>
      <ContentContainer className={styles.allPosts}>
        <Typography variant="head1">All posts</Typography>
        <hr className={styles.devider} />
        <div className={styles.postsContainer}>
          {Object.keys(posts)
            .map((postId) => ({ id: postId, ...posts[postId] }))
            .slice(0, 3)
            .map((post) => (
              <PostCard
                key={post.id}
                large
                post={post}
              />
            ))}
        </div>
        <div className={styles.pagination}>
          <Typography variant="head4">{'< Prev'}</Typography>
          <Typography variant="head3">{'Next >'}</Typography>
        </div>
      </ContentContainer>
      <ContentContainer className={styles.categories}>
        <Typography variant="head1">All Categories</Typography>
        <div className={styles.categoriesContainer}>
          <Category label="business" />
          <Category label="startup" />
          <Category label="economy" />
          <Category label="technology" />
        </div>
      </ContentContainer>
      <JoinUs />
    </div>
  );
};

export default BlogPage;
