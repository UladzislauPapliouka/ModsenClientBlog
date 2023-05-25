import React, { type FC } from 'react';
import Image from 'next/image';

import { type ICategoryProps } from '@components/Category/types';
import Typography from '@components/Typography';

import styles from './category.module.scss';

import images from './config';

const Category: FC<ICategoryProps> = ({ label }) => (
  <div className={styles.category}>
    <div className={styles.iconContainer}>
      <Image
        src={images[label]}
        alt="Category name"
      />
    </div>
    <Typography variant="head3">
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </Typography>
    <Typography variant="body2">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    </Typography>
  </div>
);

export default Category;
