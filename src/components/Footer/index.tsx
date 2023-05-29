import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';
import { useRouter } from 'next/router';

import Button from '@components/Button';
import socialLink from '@components/Footer/footer.config';
import Header from '@components/Header';
import Input from '@components/Input';
import Link from '@components/Link';
import SocialWrapper from '@components/SocialWrapper';
import Typography from '@components/Typography';
import EnvVariables from '@constants/envVariables';
import Routes from '@constants/routes';
import { subscribeFormSchema } from '@constants/shemes';
import ContentContainer from '@containers/ContentContainer';

import './i18n';

import styles from './footer.module.scss';

const Footer = () => {
  const router = useRouter();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(router.locale === 'en' ? 'en' : 'ru').catch(() => null);
  }, []);

  return (
    <div className={styles.footer}>
      <Header>
        <Link href={Routes.Home}>{t('Home')}</Link>
        <Link href={Routes.Blog}>{t('Blog')}</Link>
        <Link href={Routes['About Us']}>{t('About Us')}</Link>
        <Link href={Routes['Contact Us']}>{t('Contact Us')}</Link>
        <Link href={Routes['Privacy Policy']}>{t('Privacy Policy')}</Link>
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
              <Typography variant="head2">{t('Subscribe message')}</Typography>
              <Input
                data-cy="FOOTER_INPUT"
                name="email"
                errorMessage={errors.email}
                onBlur={handleBlur}
                placeholder={t('Placeholder').toString()}
                value={values.email}
                onChange={handleChange}
              />
              <Button
                type="submit"
                data-cy="SUBSCRIBE_BUTTON"
                disabled={isSubmitting}>
                <Typography variant="head4">{t('Subscribe')}</Typography>
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
};

export default Footer;
