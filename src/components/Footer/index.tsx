import React, { type SyntheticEvent, useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';
import { string, type ValidationError } from 'yup';

import Button from '@components/Button';
import socialLink from '@components/Footer/footer.config';
import Header from '@components/Header';
import Input from '@components/Input';
import Link from '@components/Link';
import SocialWrapper from '@components/SocialWrapper';
import Typography from '@components/Typography';
import EnvVariables from '@constants/envVariables';
import Routes from '@constants/routes';
import emailSchema, { subscribeFormSchema } from '@constants/shemes';
import ContentContainer from '@containers/ContentContainer';

import styles from './footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <Header>
      {Object.keys(Routes).map((key) => (
        <Link
          key={key}
          href={Routes[key]}>
          {key}
        </Link>
      ))}
    </Header>
    <ContentContainer>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={subscribeFormSchema}
        initialValues={{ email: '' }}
        onSubmit={(values, formikHelpers) => {
          emailjs
            .send(
              EnvVariables.NEXT_PUBLIC_SERVICE_ID,
              EnvVariables.NEXT_PUBLIC_TEMPLATE_ID,
              { email: values.email },
              EnvVariables.NEXT_PUBLIC_PUBLIC_KEY,
            )
            .then(
              () => {
                formikHelpers.setSubmitting(false);
                formikHelpers.resetForm();
                toast.success(`Success`);
              },
              (err) => {
                formikHelpers.resetForm();
                formikHelpers.setSubmitting(false);
                toast.error(err);
              },
            );
        }}>
        {({
          values,
          handleChange,
          errors,
          handleBlur,
          isSubmitting,
          handleSubmit,
          touched,
        }) => (
          <form
            className={styles.subscribeBlock}
            onSubmit={handleSubmit}>
            <Typography variant="head2">
              Subscribe to our news letter to get latest updates and news
            </Typography>
            <Input
              data-cy="FOOTER_INPUT"
              name="email"
              errorMessage={errors.email}
              onBlur={handleBlur}
              placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
            />
            <Button
              type="submit"
              data-cy="SUBSCRIBE_BUTTON"
              disabled={isSubmitting}>
              <Typography variant="head4">Subscribe</Typography>
            </Button>
          </form>
        )}
      </Formik>
    </ContentContainer>
    <ContentContainer className={styles.socialBlock}>
      <Typography variant="body1">
        Finstreet 118 2561 Fintown Hello@finsweet.com 020 7993 2905
      </Typography>
      <SocialWrapper links={socialLink} />
    </ContentContainer>
  </div>
);

export default Footer;
