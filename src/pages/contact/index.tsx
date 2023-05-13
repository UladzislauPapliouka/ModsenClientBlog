import React, { type SyntheticEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Map, Marker } from 'pigeon-maps';
import process from 'process';
import { string, type ValidationError } from 'yup';

import Button from '@components/Button';
import CustomSelect from '@components/CustomSelect';
import Input from '@components/Input';
import TextArea from '@components/TextArea';
import Typography from '@components/Typography';
import EnvVariables from '@constants/envVariables';
import Subjects from '@constants/subjects';
import ContentContainer from '@containers/ContentContainer';

import styles from './contacts.module.scss';

const HomePage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: Subjects.query,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const setName = (event: SyntheticEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: event.currentTarget.value });
  };
  const setEmail = (event: SyntheticEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: event.currentTarget.value });
  };
  const setMessage = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, message: event.currentTarget.value });
  };
  const setSubject = (value: string) => {
    setFormData({ ...formData, subject: value as Subjects });
  };
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
  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    try {
      emailSchema.validateSync(formData.email);
    } catch (e) {
      const error = e as ValidationError;
      setErrorMessage(error.errors[0]);
    }
    emailjs
      .send(
        EnvVariables.NEXT_PUBLIC_SERVICE_ID,
        EnvVariables.NEXT_PUBLIC_TEMPLATE_ID2,
        {
          email: formData.email,
          name: formData.name,
          message: formData.message,
          subject: formData.subject,
        },
        EnvVariables.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(null, (err) => {
        setErrorMessage(err);
      });
  };
  return (
    <div className={styles.page}>
      <ContentContainer
        variant="variant2"
        className={styles.pageTitle}>
        <Typography variant="head6">CONTACT US</Typography>
        <Typography variant="head1">Let’s Start a Conversation</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </Typography>
      </ContentContainer>
      <ContentContainer variant="variant2">
        <div className={styles.scheduleBlock}>
          <div>
            <Typography variant="body2">Working hours</Typography>
            <hr />
            <Typography variant="head5">Monday to Friday</Typography>
            <Typography variant="head5">9:00 AM to 8:00 PM</Typography>
            <Typography variant="body1">
              Our Support Team is available 24/7
            </Typography>
          </div>
          <div>
            <Typography variant="body2">Contact Us</Typography>
            <hr />
            <Typography variant="head5">020 7993 2905</Typography>
            <Typography variant="body1">hello@finsweet.com</Typography>
          </div>
        </div>
        <div className={styles.contactForm}>
          <Input
            onChange={setName}
            value={formData.name}
            placeholder="Full Name"
          />
          <Input
            errorMessage={errorMessage}
            onChange={setEmail}
            value={formData.email}
            placeholder="Your Email"
          />
          <CustomSelect
            selected={formData.subject}
            options={Object.values(Subjects)}
            onChangeSelected={setSubject}
          />
          <TextArea
            onChange={setMessage}
            value={formData.message}
            placeholder="Message"
          />
          <Button onClick={handleClick}>
            <Typography variant="head4">Send Message</Typography>
          </Button>
        </div>
      </ContentContainer>

      <Map
        mouseEvents={false}
        height={400}
        defaultCenter={[55.1904, 30.2049]}
        defaultZoom={5}>
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
