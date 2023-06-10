import React from 'react';

import { authors } from '@constants';

import styles from './list.module.scss';

import AuthorCard from './AuthorCard';

const AuthorsList = () => (
  <section className={styles.list}>
    {Object.keys(authors).map((id) => (
      <AuthorCard
        author={authors[id]}
        key={id}
      />
    ))}
  </section>
);

export default AuthorsList;
