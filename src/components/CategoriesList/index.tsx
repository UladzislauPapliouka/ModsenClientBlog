import React, { type FC } from 'react';

import { Categories } from '@/types';
import type ICategoryList from '@components/CategoriesList/types';
import Category from '@components/Category';

import styles from './categoryList.module.scss';

const CategoriesList: FC<ICategoryList> = ({ small, currentLabel }) => (
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
