import React from 'react';
import type ITypographyProps from './types';
import styles from './typography.module.scss';

const Typography = ({ children, variant, ...restProps }: ITypographyProps) => (
  <span
    className={styles[variant]}
    {...restProps}>
    {children}
  </span>
);
export default Typography;
