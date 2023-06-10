import { type IPostWithId } from '@/types';

interface IPostcard {
  variant?: 'large' | 'small';
  post: IPostWithId;
}
export default IPostcard;
