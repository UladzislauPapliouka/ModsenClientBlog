import React, { type FC } from 'react';

import Typography from '@components/Typography';

import styles from './tag.module.scss';

const Tag: FC<{ text: string }> = ({ text }) => (
  <div className={styles.container}>
    <Typography variant="label">{text}</Typography>
  </div>
);

export default Tag;
