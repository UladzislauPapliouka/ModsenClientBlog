import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import LabelsIcons from '@assets/labels';
import { type ICategoryProps } from '@components/Category/types';
import Typography from '@components/Typography';

import styles from './category.module.scss';

const Category: FC<ICategoryProps> = ({ label }) => {
  const [t] = useTranslation();

  return (
    <div className={styles.category}>
      <div className={styles.iconContainer}>
        <Image
          src={LabelsIcons[label]}
          alt="Category name"
        />
      </div>
      <Typography variant="head3">{t(`categories.${label}.title`)}</Typography>
      <Typography variant="body2">{t(`categories.${label}.text`)}</Typography>
    </div>
  );
};

export default Category;
