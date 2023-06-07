import React from 'react';
import Link from 'next/link';

import { type ISocial } from '@/types';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@assets/social';
import type ISocialProps from '@components/SocialWrapper/types';

import styles from './social.module.scss';

const icons: Record<string, () => JSX.Element> = {
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

const SocialWrapper = ({ links }: ISocialProps) => (
  <div className={styles.wrapper}>
    {Object.entries(links).map(([key, value]) =>
      key && value ? (
        <Link
          key={key}
          target="_blank"
          href={value}>
          {icons[key]()}
        </Link>
      ) : null,
    )}
  </div>
);

export default React.memo(SocialWrapper);
