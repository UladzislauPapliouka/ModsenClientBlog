import React from 'react';
import type IContainerProps from './types';
import styles from './contentContainer.module.scss';

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
