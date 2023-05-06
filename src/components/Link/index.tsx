import React, { type PropsWithChildren } from 'react';
import NextLink, { type LinkProps } from 'next/link';
import styles from './link.module.scss';

const Link = ({
  href,
  children,
  ...restProps
}: PropsWithChildren<LinkProps>) => (
  <NextLink
    href={href}
    className={styles.link}
    {...restProps}>
    {children}
  </NextLink>
);
export default Link;
