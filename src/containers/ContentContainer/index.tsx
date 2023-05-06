import React, { type DetailedHTMLProps, type HTMLAttributes } from 'react';
import styles from './contentContainer.module.scss';

const ContentContainer = ({
  children,
  className,
  ...restProps
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div
    className={`${styles.container} ${className}`}
    {...restProps}>
    {children}
  </div>
);
export default ContentContainer;
