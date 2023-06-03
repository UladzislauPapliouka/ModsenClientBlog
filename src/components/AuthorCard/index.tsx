import React from 'react';
import Image from 'next/image';

import { type IAuthor } from '@/types';
import SocialWrapper from '@components/SocialWrapper';
import Typography from '@components/Typography';

import styles from './card.module.scss';

const AuthorCard = ({
  author: { company, social, position, name, avatar },
}: {
  author: IAuthor;
}) => (
  <div className={styles.card}>
    <figure className={styles.avatar}>
      <Image
        src={avatar}
        alt="avatar"
      />
    </figure>
    <Typography variant="head4">{name}</Typography>
    <Typography variant="body2">{`${position} @${company}`}</Typography>
    <SocialWrapper links={social} />
  </div>
);

export default AuthorCard;
