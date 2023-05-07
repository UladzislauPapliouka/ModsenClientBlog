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
import styles from './footer.module.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const emailSchema = string().test(
    'is-email',
    (d) => `Incorrect email`,
    (value) => {
      const isEmail = !!value!.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
      return isEmail;
    },
  );
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
    }
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        { email },
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      )
      .then(null, (err) => {
        setErrorMessage(err);
      });
  };
  return (
    <div className={styles.footer}>
      <Header>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/privacy">Privacy Policy</Link>
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
          <Button onClick={handleClick}>
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
