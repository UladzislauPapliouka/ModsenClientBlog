import { type StaticImageData } from 'next/image';

interface IBlogPostInfo {
  authorAvatar: StaticImageData;
  authorName: string;
  postedDate: Date | string;
  postTitle: string;
  category: 'startup' | 'business' | 'economy' | 'technology';
}
export default IBlogPostInfo;
