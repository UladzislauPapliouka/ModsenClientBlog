import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';
import { Map, Marker, ZoomControl } from 'pigeon-maps';

import { Button, CustomSelect, Input, TextArea, Typography } from '@components';
import EnvVariables from '@constants/envVariables';
import { contactFormSchema } from '@constants/shemes';
import Subjects from '@constants/subjects';
import ContentContainer from '@containers/ContentContainer';

import styles from './contacts.module.scss';

const HomePage = (): JSX.Element => {
  const [subject, setSubject] = useState(Subjects.query);

  const [t, i18n] = useTranslation();

  return (
    <div className={styles.page}>
      <ContentContainer
        variant="variant2"
        className={styles.pageTitle}>
        <Typography variant="head6">{t('contacts.contactsUs')}</Typography>
        <Typography variant="head1">
          {t('contacts.letsConversation')}
        </Typography>
        <Typography variant="body1">{t('contacts.lowerText')}</Typography>
      </ContentContainer>
      <ContentContainer variant="variant2">
        <div className={styles.scheduleBlock}>
          <div>
            <Typography variant="body2">
              {t('contacts.workingHours')}
            </Typography>
            <hr />
            <Typography variant="head5">{t('contacts.workingDays')}</Typography>
            <Typography variant="head5">9:00 AM to 8:00 PM</Typography>
            <Typography variant="body1">{t('contacts.workingText')}</Typography>
          </div>
          <div>
            <Typography variant="body2">{t('contacts.contactsUs')}</Typography>
            <hr />
            <Typography variant="head5">020 7993 2905</Typography>
            <Typography variant="body1">hello@finsweet.com</Typography>
          </div>
        </div>
        <Formik
          initialValues={{
            email: '',
            name: '',
            message: '',
          }}
          validationSchema={contactFormSchema}
          onSubmit={(values, formikHelpers) => {
            emailjs
              .send(
                EnvVariables.NEXT_PUBLIC_SERVICE_ID,
                EnvVariables.NEXT_PUBLIC_TEMPLATE_ID2,
                {
                  email: values.email,
                  name: values.name,
                  message: values.message,
                  subject,
                },
                EnvVariables.NEXT_PUBLIC_PUBLIC_KEY,
              )
              .then(
                () => {
                  formikHelpers.setSubmitting(false);
                  formikHelpers.resetForm();
                  toast.success('Success');
                },
                (err) => {
                  formikHelpers.setSubmitting(false);
                  formikHelpers.resetForm();
                  toast.error(err);
                },
              );
          }}>
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            <form
              onSubmit={handleSubmit}
              className={styles.contactForm}>
              <Input
                name="name"
                data-cy="INPUT_NAME"
                errorMessage={errors.name}
                onChange={handleChange}
                value={values.name}
                placeholder={t('contacts.placeholderName').toString()}
              />
              <Input
                name="email"
                data-cy="INPUT_EMAIL"
                errorMessage={errors.email}
                onChange={handleChange}
                value={values.email}
                placeholder={t('contacts.placeholderEmail').toString()}
              />
              <CustomSelect
                selected={subject}
                options={Object.values(Subjects)}
                onChangeSelected={setSubject}
                name="subject"
              />
              <TextArea
                data-cy="INPUT_MESSAGE"
                errorMessage={errors.message}
                onChange={handleChange}
                value={values.message}
                placeholder={t('contacts.placeholderMessage').toString()}
                name="message"
              />
              <Button
                type="submit"
                data-cy="CONTACT_BUTTON"
                disabled={isSubmitting}>
                <Typography variant="head4">
                  {t('contacts.buttonText').toString()}
                </Typography>
              </Button>
            </form>
          )}
        </Formik>
      </ContentContainer>

      <Map
        height={400}
        defaultCenter={[55.1904, 30.2049]}
        defaultZoom={5}>
        <ZoomControl />
        <Marker
          width={50}
          anchor={[55.1904, 30.2049]}
        />
        <Marker
          width={50}
          anchor={[52.22977, 21.01178]}
        />
        <Marker
          width={50}
          anchor={[54.68916, 25.2798]}
        />
      </Map>
    </div>
  );
};

export default HomePage;
