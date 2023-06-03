import posts from '@constants/posts';
import {
  addPostId,
  getFeaturedPost,
  getPagePosts,
  getPostsWithId,
  getWhatToReadNext,
} from '@services/posts';

describe('Posts services should work correct', () => {
  test('addPostId should work correct', () => {
    const result = addPostId('1');

    expect(result.id).toBe('1');
  });
  test('getPostsWithId should work correct', () => {
    const result = getPostsWithId();

    expect(result.length).toBe(Object.keys(posts).length);
    expect(result[0].id).toBeDefined();
  });
  test('getFeaturedPost should work correct', () => {
    const result = getFeaturedPost();

    expect(result.id).toBe('3');
  });
  test('getWhatToReadNext should work correct', () => {
    const result = getWhatToReadNext(posts['1']);

    expect(result.length).toBeLessThanOrEqual(3);
    expect(result[0].category).toBe(posts[1].category);
    expect(result[1].category).toBe(posts[1].category);
    expect(result[2].category).toBe(posts[1].category);
  });
  test('getPagePosts should work correct', () => {
    const result = getPagePosts(1);

    expect(result.length).toBe(4);
    expect(result[0].id).toBe('1');
    expect(result[1].id).toBe('2');
    expect(result[2].id).toBe('3');
    expect(result[3].id).toBe('4');
  });
});
