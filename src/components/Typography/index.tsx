import React from 'react';

import styles from './typography.module.scss';

import type ITypographyProps from './types';

const Typography = ({
  children,
  variant,
  className,
  ...restProps
}: ITypographyProps) => (
  <span
    className={`${styles[variant]} ${className}`}
    {...restProps}>
    {children}
  </span>
);

export default Typography;
