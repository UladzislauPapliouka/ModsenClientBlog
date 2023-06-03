import { type Categories, type IAuthor } from '@typing';

interface IBlogPostInfo {
  author: IAuthor;
  postedDate: Date | string;
  postTitle: string;
  category: Categories;
}
export default IBlogPostInfo;
