import React from 'react';

import styles from './contentContainer.module.scss';

import type IContainerProps from './types';

const ContentContainer = ({
  className,
  variant = 'variant1',
  children,
  ...restProps
}: IContainerProps) => (
  <div
    className={`${styles.container} ${className} ${styles[variant]}`}
    {...restProps}>
    {children}
  </div>
);

export default ContentContainer;
