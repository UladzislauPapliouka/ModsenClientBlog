import { type IPost, type IPostWithId } from '@/types';
import { authors, PAGE_SIZE, postsEn } from '@constants';

import i18n from '../pages/i18n';

export const addPostId = (
  postId: string,
  object: Record<number | string, IPost>,
): IPostWithId => ({
  id: postId,
  ...object[postId],
});

export const getPostsWithId = (): IPostWithId[] => {
  let posts: Record<string | number, IPost>;

  if (i18n.getResourceBundle) {
    posts = i18n.getResourceBundle(i18n.language, '').postsAra;
  } else {
    posts = postsEn;
  }

  return Object.keys(posts).map((postId) => addPostId(postId, posts));
};

export const getWhatToReadNext = ({ category, title }: IPost): IPostWithId[] =>
  getPostsWithId()
    .filter((post) => post.category === category && post.title !== title)
    .slice(0, 3);

export const getFeaturedPost = (): IPostWithId =>
  getPostsWithId().reduce(
    (prev, curr) => (curr.views > prev.views ? curr : prev),
    getPostsWithId()['1'],
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

function contains(where: string[], what: string[]) {
  if (!what || !what.length || what[0] === '') return true;

  if (!where || !what.length) return false;

  for (let i = 0; i < what.length; i += 1) {
    if (!where.includes(what[i])) return false;
  }

  return true;
}

export const getPosts = (tags: string[], category: string) => {
  if (!tags.length || !tags) {
    return getPostsWithId().filter((post) => post.category === category);
  }

  return getPostsWithId().filter(
    (post) =>
      contains(post.tags as string[], tags) && post.category === category,
  );
};
