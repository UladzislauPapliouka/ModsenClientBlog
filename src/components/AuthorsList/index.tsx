import React from 'react';

import authors from '@constants/authors';

import styles from './list.module.scss';

import AuthorCard from './AuthorCard';

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
