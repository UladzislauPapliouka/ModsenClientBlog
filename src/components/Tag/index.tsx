import React, { type FC } from 'react';

import type ITag from '@components/Tag/types';
import Typography from '@components/Typography';

import styles from './tag.module.scss';

const Tag: FC<ITag> = ({ text, active, onClick }) => {
  const handleClick = () => {
    onClick?.(text);
  };

  return (
    <div
      data-cy={`TAG_${text}`}
      onClick={handleClick}
      className={`${styles.container} ${active && styles.active}`}>
      <Typography variant="label">{text}</Typography>
    </div>
  );
};

export default React.memo(Tag);
