import React from 'react';

import { body1, body2, head1, head2 } from '@/pages/privacy/config';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';

import styles from './privecy.module.scss';

const HomePage = (): JSX.Element => (
  <div>
    <div className={styles.pageHead}>
      <Typography variant="head1">Privacy Policy</Typography>
      <Typography variant="body1">Last Updated on 27th January 2022</Typography>
    </div>
    <ContentContainer className={styles.privacyInfo}>
      <Typography variant="head1">{head1}</Typography>
      <Typography variant="body1">{body1}</Typography>
      <Typography variant="head2">{head2}</Typography>
      <Typography variant="body1">{body2}</Typography>
    </ContentContainer>
  </div>
);

export default HomePage;
