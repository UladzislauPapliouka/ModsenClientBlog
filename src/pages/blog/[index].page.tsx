import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import postImage from '@assets/images/photo-of-woman-wearing-eyeglasses-3184405.png';
import BlogPostInfo from '@components/BlogPostInfo';
import Button from '@components/Button';
import JoinUs from '@components/JoinUs';
import PostCard from '@components/PostCard';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';

import styles from './blogpost.module.scss';

const BlogPost = (): JSX.Element => (
  <div>
    <ContentContainer variant="variant2">
      <BlogPostInfo />
    </ContentContainer>
    <ContentContainer
      className={styles.postImage}
      variant="variant1">
      <Image
        src={postImage}
        alt="Post image"
      />
    </ContentContainer>
    <ContentContainer
      className={styles.postText}
      variant="variant2">
      <Typography variant="head2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.{' '}
      </Typography>
      <Typography variant="head2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.{' '}
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.{' '}
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non.{' '}
      </Typography>
    </ContentContainer>
    <ContentContainer>
      <Typography variant="head2">What to reed next</Typography>
      <div className={styles.postCards}>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <hr className={styles.devider} />
    </ContentContainer>
    <JoinUs />
  </div>
);

export default BlogPost;
