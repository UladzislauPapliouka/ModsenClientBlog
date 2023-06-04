import { type Tags } from '@/types';

interface ITag {
  text: `${Tags}`;
  active?: boolean;
  onClick?: (tagName: `${Tags}`) => void;
}
export default ITag;
