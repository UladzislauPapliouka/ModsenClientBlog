import React, { type PropsWithChildren } from 'react';
import NextLink, { type LinkProps } from 'next/link';
import { useRouter } from 'next/router';

import styles from './link.module.scss';

const Link = ({
  href,
  children,
  ...restProps
}: PropsWithChildren<LinkProps>) => {
  const router = useRouter();

  return (
    <NextLink
      href={href}
      className={`${styles.link} ${router.pathname === href && styles.active}`}
      {...restProps}>
      {children}
    </NextLink>
  );
};

export default Link;
