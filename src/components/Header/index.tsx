import React, { type PropsWithChildren } from 'react';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';
import styles from './header.module.scss';

const Header = ({ children }: PropsWithChildren) => (
  <ContentContainer className={styles.header}>
    <Typography variant="head4">Modsen Client Blog</Typography>
    <div>{children}</div>
  </ContentContainer>
);
export default Header;
