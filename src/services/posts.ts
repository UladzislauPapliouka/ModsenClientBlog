import i18n from 'i18next';

import { type IPost, type IPostWithId } from '@/types';
import authors from '@constants/authors';
import PAGE_SIZE from '@constants/numbers';

export const addPostId = (
  postId: string,
  object: Record<number | string, IPost>,
): IPostWithId => ({
  id: postId,
  ...object[postId],
});

export const getPostsWithId = (): IPostWithId[] => {
  const posts = i18n.getResourceBundle(i18n.language, '').postsAra;

  return Object.keys(posts).map((postId) => addPostId(postId, posts));
};

export const getWhatToReadNext = ({ category, title }: IPost): IPostWithId[] =>
  getPostsWithId().filter(
    (post) => post.category === category && post.title !== title,
  );

export const getFeaturedPost = (): IPostWithId =>
  getPostsWithId().reduce(
    (prev, curr) => (curr.views > prev.views ? curr : prev),
    addPostId('1', i18n.getResourceBundle(i18n.language, '').postsAra),
  );
export const getPagePosts = (page = 1) => {
  const postsArray = getPostsWithId();

  const allPostsLength = postsArray.length;

  let firstPostPosition = (page - 1) * PAGE_SIZE;

  firstPostPosition -=
    allPostsLength * Math.floor(firstPostPosition / allPostsLength);

  if (allPostsLength - firstPostPosition < PAGE_SIZE) {
    const take = allPostsLength - firstPostPosition;

    return postsArray
      .slice(-take)
      .concat(postsArray.slice(0, PAGE_SIZE - take));
  }

  console.log(firstPostPosition);

  return postsArray.slice(firstPostPosition, firstPostPosition + PAGE_SIZE);
};
export const getLastPost = () => {
  const postsArray = getPostsWithId();

  return postsArray.reduce(
    (prev, curr) => (prev.date >= curr.date ? prev : curr),
    addPostId('1', i18n.getResourceBundle(i18n.language, '').postsAra),
  );
};
export const getAuthorsPosts = (authorId: string | number) =>
  getPostsWithId().filter((post) => post.author === authors[authorId]);
