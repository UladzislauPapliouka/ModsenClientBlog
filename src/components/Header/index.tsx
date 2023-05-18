import React, { type PropsWithChildren, useState } from 'react';

import ModalFC from '@components/Modal';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';

import styles from './header.module.scss';

const Header = ({ children }: PropsWithChildren) => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <ContentContainer
      className={`${styles.header} ${isActive && styles.active}`}>
      <Typography variant="head4">Modsen Client Blog</Typography>
      <div
        onClick={toggleIsActive}
        data-cy="mobMenu"
        className={`${styles.menu} ${isActive && styles.active}`}>
        <div className={`${styles.menuLine} ${styles.number1}`} />
        <div className={`${styles.menuLine} ${styles.number2}`} />
        <div className={`${styles.menuLine} ${styles.number3}`} />
      </div>
      <div className={styles.navItems}>{children}</div>
      {isActive && (
        <ModalFC handleClose={toggleIsActive}>
          <div
            className={styles.navItemsMobile}
            onClick={toggleIsActive}>
            {children}
          </div>
        </ModalFC>
      )}
    </ContentContainer>
  );
};

export default Header;
