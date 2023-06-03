import React from 'react';

import AuthorCard from '@components/AuthorCard';
import authors from '@constants/authors';

import styles from './list.module.scss';

const AuthorsList = () => (
  <div className={styles.list}>
    {Object.keys(authors).map((id) => (
      <AuthorCard
        author={authors[id]}
        key={id}
      />
    ))}
  </div>
);

export default AuthorsList;
