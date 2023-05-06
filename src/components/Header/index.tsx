import React, { type PropsWithChildren } from 'react';
import Typography from '@components/Typography';
import styles from './header.module.scss';

const Header = ({ children }: PropsWithChildren) => (
  <header className={styles.header}>
    <Typography variant="head4">Modsen Client Blog</Typography>
    <div>{children}</div>
  </header>
);
export default Header;
