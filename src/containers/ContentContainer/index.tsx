import React from 'react';

import styles from './contentContainer.module.scss';

import type IContainerProps from './types';

const ContentContainer = ({
  children,
  className,
  variant = 'variant1',
  ...restProps
}: IContainerProps) => (
  <div
    className={`${styles.container} ${className} ${styles[variant]}`}
    {...restProps}>
    {children}
  </div>
);
export default ContentContainer;
