import React from 'react';
import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@assets/social';
import type ISocialProps from '@components/SocialWrapper/types';

import styles from './social.module.scss';

const SocialWrapper = ({
  links: { twitter, facebook, linkedin, instagram },
}: ISocialProps) => (
  <div className={styles.wrapper}>
    {facebook && (
      <Link
        target="_blank"
        href={facebook}>
        <FacebookIcon />
      </Link>
    )}
    {twitter && (
      <Link
        target="_blank"
        href={twitter}>
        <TwitterIcon />
      </Link>
    )}
    {instagram && (
      <Link
        target="_blank"
        href={instagram}>
        <InstagramIcon />
      </Link>
    )}
    {linkedin && (
      <Link
        target="_blank"
        href={linkedin}>
        <LinkedInIcon />
      </Link>
    )}
  </div>
);
export default SocialWrapper;
