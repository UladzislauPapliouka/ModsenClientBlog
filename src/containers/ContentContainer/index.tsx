import React from 'react';
import styles from './styles.module.scss';

function ContentContainer({ children }: { children: JSX.Element }) {
  return <div className={styles.container}>{children}</div>;
}
export default ContentContainer;
