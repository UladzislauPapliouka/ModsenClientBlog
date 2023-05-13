import React, { type SyntheticEvent, useState } from 'react';
import Header from '@components/Header';
import Link from '@components/Link';
import ContentContainer from '@containers/ContentContainer';
import Button from '@components/Button';
import Typography from '@components/Typography';
import SocialWrapper from '@components/SocialWrapper';
import Input from '@components/Input';
import { string, type ValidationError } from 'yup';
import emailjs from '@emailjs/browser';
import * as process from 'process';
import Routes from '@constants/routes';
import emailSchema from '@constants/shemes';
import EnvVariables from '@constants/envVariables';
import styles from './footer.module.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, setIsPending] = useState(false);
  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setErrorMessage('');
    setEmail(event.currentTarget.value);
  };
  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    try {
      emailSchema.validateSync(email);
    } catch (e) {
      const error = e as ValidationError;
      setErrorMessage(error.errors[0]);
      return;
    }
    setIsPending(true);
    emailjs
      .send(
        EnvVariables.NEXT_PUBLIC_SERVICE_ID,
        EnvVariables.NEXT_PUBLIC_TEMPLATE_ID,
        { email },
        EnvVariables.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setIsPending(false);
          setEmail('');
        },
        (err) => {
          setErrorMessage(err);
          setIsPending(false);
          setEmail('');
        },
      );
  };
  return (
    <div className={styles.footer}>
      <Header>
        <Link href={Routes.HOME}>Home</Link>
        <Link href={Routes.BLOG}>Blog</Link>
        <Link href={Routes.ABOUT}>About Us</Link>
        <Link href={Routes.CONTACTS}>Contact Us</Link>
        <Link href={Routes.PRIVACY}>Privacy Policy</Link>
      </Header>
      <ContentContainer>
        <div className={styles.subscribeBlock}>
          <Typography variant="head2">
            Subscribe to our news letter to get latest updates and news
          </Typography>
          <Input
            errorMessage={errorMessage}
            placeholder="Enter Your Email"
            value={email}
            onChange={handleChange}
          />
          <Button
            disabled={isPending}
            onClick={handleClick}>
            <Typography variant="head4">Subscribe</Typography>
          </Button>
        </div>
      </ContentContainer>
      <ContentContainer className={styles.socialBlock}>
        <Typography variant="body1">
          Finstreet 118 2561 Fintown Hello@finsweet.com 020 7993 2905
        </Typography>
        <SocialWrapper />
      </ContentContainer>
    </div>
  );
};

export default Footer;
