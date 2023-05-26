import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import BlogPostInfo from '@components/BlogPostInfo';
import JoinUs from '@components/JoinUs';
import PostCard from '@components/PostCard';
import Typography from '@components/Typography';
import posts from '@constants/posts';
import ContentContainer from '@containers/ContentContainer';

import styles from './blogpost.module.scss';

const BlogPost = (): JSX.Element => {
  const router = useRouter();

  console.log(router.query.postId);
  if (!router.query.postId) {
    return <div />;
  }

  if (!posts[router.query.postId as string]) {
    return (
      <ContentContainer>
        <Typography variant="head1">{`Post ${router.query.postId}  doesn't exist`}</Typography>
      </ContentContainer>
    );
  }

  const { title, date, image, author, category, text } =
    posts[router.query.postId as string];

  const recomendedPosts = Object.keys(posts)
    .map((postId) => ({ id: postId, ...posts[postId] }))
    .filter((post) => post.category === category && post.title !== title);

  return (
    <div>
      <ContentContainer variant="variant2">
        <BlogPostInfo
          postedDate={date}
          postTitle={title}
          authorAvatar={author.avatar}
          authorName={author.name}
          category={category}
        />
      </ContentContainer>
      <ContentContainer
        className={styles.postImage}
        variant="variant1">
        <Image
          src={image}
          alt="Post image"
        />
      </ContentContainer>
      <ContentContainer
        className={styles.postText}
        variant="variant2">
        {text.map(([type, text]) => (
          <Typography
            key={text}
            variant={type}>
            {text}
          </Typography>
        ))}
      </ContentContainer>
      <ContentContainer>
        <Typography variant="head2">What to read next</Typography>
        <div className={styles.postCards}>
          {recomendedPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
        <hr className={styles.devider} />
      </ContentContainer>
      <JoinUs />
    </div>
  );
};

export default BlogPost;
