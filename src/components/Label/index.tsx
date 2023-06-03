import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import LabelsIcons from '@assets/labels';
import { type ILabelProps } from '@components/Label/types';
import Typography from '@components/Typography';

import styles from './label.module.scss';

const Label: FC<ILabelProps> = ({ label }) => {
  const [t] = useTranslation();

  return (
    <div className={styles.label}>
      <Image
        src={LabelsIcons[label]}
        alt="Category icon"
      />
      <Typography variant="head4">{t(`categories.${label}.title`)}</Typography>
    </div>
  );
};

export default Label;
