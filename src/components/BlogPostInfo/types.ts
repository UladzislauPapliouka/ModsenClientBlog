import { type StaticImageData } from 'next/image';

import { type Categories } from '@typing';

interface IBlogPostInfo {
  authorAvatar: StaticImageData;
  authorName: string;
  postedDate: Date | string;
  postTitle: string;
  category: Categories;
}
export default IBlogPostInfo;
