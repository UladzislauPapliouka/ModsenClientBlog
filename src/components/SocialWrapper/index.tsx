import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@assets/social';
import styles from './social.module.scss';

const SocialWrapper = () => (
  <div className={styles.wrapper}>
    <FacebookIcon />
    <TwitterIcon />
    <InstagramIcon />
    <LinkedInIcon />
  </div>
);
export default SocialWrapper;
