import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from 'components-wil';
import Link from 'next/link';

import { routes } from '@constants';
import ContentContainer from '@containers/ContentContainer';

import styles from './joinUs.module.scss';

const JoinUs = () => {
  const [t] = useTranslation();

  return (
    <ContentContainer
      className={styles.joinBlock}
      variant="variant2">
      <article className={styles.wrapper}>
        <Typography variant="head3">{t('joinUs.title')}</Typography>
        <Typography variant="body1">{t('joinUs.text')}</Typography>
        <Link href={routes['Contact Us']}>
          <Button>
            <Typography variant="head5">{t('joinUs.buttonText')}</Typography>
          </Button>
        </Link>
      </article>
    </ContentContainer>
  );
};

export default React.memo(JoinUs);
