import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'components-wil';
import Image from 'next/image';

import LabelsIcons from '@assets/labels';
import { type ICategoryProps } from '@components/CategoriesList/Category/types';
import Link from '@components/Link';
import { routes } from '@constants';

import styles from './category.module.scss';

const Category: FC<ICategoryProps> = ({ label, small, active }) => {
  const [t] = useTranslation();

  return small ? (
    <Link href={`${routes.categories}/${label}`}>
      <summary className={`${styles.smallCategory} ${active && styles.active}`}>
        <figure className={styles.iconContainer}>
          <Image
            src={LabelsIcons[label]}
            alt="Category name"
          />
        </figure>
        <Typography variant="head3">
          {t(`categories.${label}.title`)}
        </Typography>
      </summary>
    </Link>
  ) : (
    <Link href={`${routes.categories}/${label}`}>
      <summary className={`${styles.category} ${active && styles.active}`}>
        <figure className={styles.iconContainer}>
          <Image
            src={LabelsIcons[label]}
            alt="Category name"
          />
        </figure>
        <Typography variant="head3">
          {t(`categories.${label}.title`)}
        </Typography>
        <Typography variant="body2">{t(`categories.${label}.text`)}</Typography>
      </summary>
    </Link>
  );
};

export default React.memo(Category);
