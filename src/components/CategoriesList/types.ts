import { type Categories } from '@/types';
import { type ICategoryProps } from '@components/CategoriesList/Category/types';

interface ICategoryList extends Pick<ICategoryProps, 'small'> {
  currentLabel?: `${Categories}`;
}
export default ICategoryList;
