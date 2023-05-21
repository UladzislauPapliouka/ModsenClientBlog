import React from 'react';
import Link from 'next/link';

import Button from '@components/Button';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';

import styles from './joinUs.module.scss';

const JoinUs = () => (
  <ContentContainer
    className={styles.joinBlock}
    variant="variant2">
    <Typography variant="head3">
      Join our team to be a part of our story
    </Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </Typography>
    <Link href="/about">
      <Button>
        <Typography variant="head5">Join Now</Typography>
      </Button>
    </Link>
  </ContentContainer>
);

export default JoinUs;
