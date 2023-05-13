import React from 'react';

import styles from './typography.module.scss';

import type ITypographyProps from './types';

const Typography = ({ children, variant, ...restProps }: ITypographyProps) => (
  <span
    className={styles[variant]}
    {...restProps}>
    {children}
  </span>
);
export default Typography;
