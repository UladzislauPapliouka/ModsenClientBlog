import React from 'react';

import Category from '@components/Category';

import styles from './categoryList.module.scss';

const CategoriesList = () => (
  <div className={styles.categoriesContainer}>
    <Category label="business" />
    <Category label="startup" />
    <Category label="economy" />
    <Category label="technology" />
  </div>
);

export default CategoriesList;
