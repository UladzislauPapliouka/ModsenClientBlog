import { type IPost, type IPostWithId } from '@/types';
import authors from '@constants/authors';
import posts from '@constants/posts';

export const addPostId = (postId: string): IPostWithId => ({
  id: postId,
  ...posts[postId],
});

export const getPostsWithId = (): IPostWithId[] =>
  Object.keys(posts).map(addPostId);

export const getWhatToReadNext = ({ category, title }: IPost): IPostWithId[] =>
  getPostsWithId().filter(
    (post) => post.category === category && post.title !== title,
  );

export const getFeaturedPost = (): IPostWithId =>
  getPostsWithId().reduce(
    (prev, curr) => (curr.views > prev.views ? curr : prev),
    addPostId('1'),
  );
export const getPagePosts = (page = 1) => {
  const postsArray = getPostsWithId();

  const allPostsLength = postsArray.length;

  let currPos = (page - 1) * 4;

  while (currPos >= allPostsLength) {
    currPos -= allPostsLength;
  }

  if (allPostsLength - currPos < 4) {
    const take = allPostsLength - currPos;

    return postsArray.slice(-take).concat(postsArray.slice(0, 4 - take));
  }

  return postsArray.slice(currPos, currPos + 4);
};
export const getLastPost = (date: Date) => {
  const postsArray = getPostsWithId();

  return postsArray.reduce(
    (prev, curr) => (prev.date >= curr.date ? prev : curr),
    addPostId('1'),
  );
};
export const getAuthorsPosts = (authorId: string | number) =>
  getPostsWithId().filter((post) => post.author === authors[authorId]);
