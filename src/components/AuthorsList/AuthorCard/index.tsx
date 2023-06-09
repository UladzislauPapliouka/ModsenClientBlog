import React from 'react';
import { Typography } from 'components-wil';
import Image from 'next/image';

import { type IAuthor } from '@/types';
import Link from '@components/Link';
import SocialWrapper from '@components/SocialWrapper';
import routes from '@constants/routes';

import styles from './card.module.scss';

const AuthorCard = ({
  author: { company, social, position, name, avatar, id },
}: {
  author: IAuthor;
}) => (
  <article className={styles.card}>
    <figure className={styles.avatar}>
      <Image
        src={avatar}
        alt="avatar"
      />
    </figure>
    <Link href={`${routes.author}/${id}`}>
      <Typography variant="head4">{name}</Typography>
    </Link>
    <Typography variant="body2">{`${position} @${company}`}</Typography>
    <SocialWrapper links={social} />
  </article>
);

export default React.memo(AuthorCard);
