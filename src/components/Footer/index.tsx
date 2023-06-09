import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Button, Input, Typography } from 'components-wil';
import { Formik } from 'formik';
import { useRouter } from 'next/router';

import socialLink from '@components/Footer/footer.config';
import Header from '@components/Header';
import Link from '@components/Link';
import SocialWrapper from '@components/SocialWrapper';
import EnvVariables from '@constants/envVariables';
import Routes from '@constants/routes';
import { subscribeFormSchema } from '@constants/shemes';
import ContentContainer from '@containers/ContentContainer';

import styles from './footer.module.scss';

const footerRouter = [
  Routes.Home,
  Routes.Blog,
  Routes['About Us'],
  Routes['Contact Us'],
  Routes['Privacy Policy'],
];

const Footer = () => {
  const { locale } = useRouter();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale === 'en' ? 'en' : 'ru').catch(() => null);
  }, [locale]);

  return (
    <footer className={styles.footer}>
      <Header>
        {footerRouter.map((route) => (
          <Link
            key={route}
            href={route}>
            {t(`links.${route}`)}
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
          }) => (
            <form
              className={styles.subscribeBlock}
              onSubmit={handleSubmit}>
              <Typography variant="head2">
                {t('footer.Subscribe message')}
              </Typography>
              <Input
                data-cy="FOOTER_INPUT"
                name="email"
                errorMessage={errors.email}
                onBlur={handleBlur}
                placeholder={t('footer.Placeholder').toString()}
                value={values.email}
                onChange={handleChange}
              />
              <Button
                type="submit"
                data-cy="SUBSCRIBE_BUTTON"
                disabled={isSubmitting}>
                <Typography variant="head4">{t('footer.Subscribe')}</Typography>
              </Button>
            </form>
          )}
        </Formik>
      </ContentContainer>
      <ContentContainer className={styles.socialBlock}>
        <Typography variant="body1">{t('footer.address')}</Typography>
        <SocialWrapper links={socialLink} />
      </ContentContainer>
    </footer>
  );
};

export default React.memo(Footer);
