import React, { type PropsWithChildren, useState } from 'react';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';
import ModalFC from '@components/Modal';
import styles from './header.module.scss';

const Header = ({ children }: PropsWithChildren) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <ContentContainer
      className={`${styles.header} ${isActive && styles.active}`}>
      <Typography variant="head4">Modsen Client Blog</Typography>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`${styles.menu} ${isActive && styles.active}`}>
        <div className={`${styles.menuLine} ${styles.number1}`} />
        <div className={`${styles.menuLine} ${styles.number2}`} />
        <div className={`${styles.menuLine} ${styles.number3}`} />
      </div>
      <div className={styles.navItems}>{children}</div>
      {isActive && (
        <ModalFC
          handleClose={() => {
            setIsActive(!isActive);
          }}>
          <div
            className={styles.navItemsMobile}
            onClick={() => {
              setIsActive(!isActive);
            }}>
            {children}
          </div>
        </ModalFC>
      )}
    </ContentContainer>
  );
};
export default Header;
