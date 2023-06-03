import React, { type FC } from 'react';

import { Categories } from '@/types';
import Category from '@components/Category';
import { type ICategoryProps } from '@components/Category/types';

import styles from './categoryList.module.scss';

const CategoriesList: FC<
  { currentLabel?: `${Categories}` } & Pick<ICategoryProps, 'small'>
> = ({ small, currentLabel }) => (
  <div
    className={
      small ? styles.smallCategoriesContainer : styles.categoriesContainer
    }>
    {Object.values(Categories).map((category) => (
      <Category
        key={category}
        small={small}
        label={category}
        active={category === currentLabel}
      />
    ))}
  </div>
);

export default CategoriesList;
