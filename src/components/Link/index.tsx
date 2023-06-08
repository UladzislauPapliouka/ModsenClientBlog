import React, { type PropsWithChildren } from 'react';
import NextLink, { type LinkProps } from 'next/link';
import { useRouter } from 'next/router';

import styles from './link.module.scss';

const Link = ({
  href,
  children,
  ...restProps
}: PropsWithChildren<LinkProps>) => {
  const { pathname } = useRouter();

  return (
    <NextLink
      data-cy={`LINK_TO_${href as string}`}
      href={href}
      className={`${styles.link} ${pathname === href && styles.active}`}
      {...restProps}>
      {children}
    </NextLink>
  );
};

export default React.memo(Link);
