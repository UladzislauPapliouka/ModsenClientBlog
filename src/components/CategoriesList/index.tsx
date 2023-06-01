import React, { type FC } from 'react';

import Category from '@components/Category';
import { type ICategoryProps } from '@components/Category/types';

import styles from './categoryList.module.scss';

const CategoriesList: FC<Pick<ICategoryProps, 'small'>> = ({ small }) => (
  <div
    className={
      small ? styles.smallCategoriesContainer : styles.categoriesContainer
    }>
    <Category
      small={small}
      label="business"
    />
    <Category
      small={small}
      label="startup"
    />
    <Category
      small={small}
      label="economy"
    />
    <Category
      small={small}
      label="technology"
    />
  </div>
);

export default CategoriesList;
