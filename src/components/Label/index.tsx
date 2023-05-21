import React, { type FC } from 'react';
import Image from 'next/image';

import LabelsIcons from '@components/Label/config';
import { type ILabelProps } from '@components/Label/types';
import Typography from '@components/Typography';

import styles from './label.module.scss';

const Label: FC<ILabelProps> = ({ label }) => (
  <div className={styles.label}>
    <Image
      src={LabelsIcons[label]}
      alt="Category icon"
    />
    <Typography variant="head4">
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </Typography>
  </div>
);

export default Label;
