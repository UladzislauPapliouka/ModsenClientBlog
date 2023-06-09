import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'components-wil';
import Image from 'next/image';

import LabelsIcons from '@assets/labels';
import { type ICategoryProps } from '@components/CategoriesList/Category/types';
import Link from '@components/Link';
import routes from '@constants/routes';

import styles from './category.module.scss';

const Category: FC<ICategoryProps> = ({ label, small, active }) => {
  const [t] = useTranslation();

  return small ? (
    <Link href={`${routes.categories}/${label}`}>
      <div className={`${styles.smallCategory} ${active && styles.active}`}>
        <div className={styles.iconContainer}>
          <Image
            src={LabelsIcons[label]}
            alt="Category name"
          />
        </div>
        <Typography variant="head3">
          {t(`categories.${label}.title`)}
        </Typography>
      </div>
    </Link>
  ) : (
    <Link href={`${routes.categories}/${label}`}>
      <div className={`${styles.category} ${active && styles.active}`}>
        <div className={styles.iconContainer}>
          <Image
            src={LabelsIcons[label]}
            alt="Category name"
          />
        </div>
        <Typography variant="head3">
          {t(`categories.${label}.title`)}
        </Typography>
        <Typography variant="body2">{t(`categories.${label}.text`)}</Typography>
      </div>
    </Link>
  );
};

export default React.memo(Category);
