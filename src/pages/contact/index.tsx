import React, { type SyntheticEvent, useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Map, Marker, ZoomControl } from 'pigeon-maps';

import Button from '@components/Button';
import CustomSelect from '@components/CustomSelect';
import Input from '@components/Input';
import TextArea from '@components/TextArea';
import Typography from '@components/Typography';
import EnvVariables from '@constants/envVariables';
import emailSchema, { messageSchema, nameSchema } from '@constants/shemes';
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

  const [errorMessages, setErrorMessages] = useState<
    Record<string, string | undefined>
  >({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [isPending, setIsPending] = useState(false);

  const setNameError = (message: string) => {
    setErrorMessages({ ...errorMessages, name: message });
  };

  const setName = (event: SyntheticEvent<HTMLInputElement>) => {
    setNameError('');
    setFormData({ ...formData, name: event.currentTarget.value });
  };

  const setEmailError = (message: string) => {
    setErrorMessages({ ...errorMessages, email: message });
  };

  const setEmail = (event: SyntheticEvent<HTMLInputElement>) => {
    setEmailError('');
    setFormData({ ...formData, email: event.currentTarget.value });
  };

  const setMessageError = (message: string) => {
    setErrorMessages({ ...errorMessages, message });
  };

  const setMessage = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    setMessageError('');
    setFormData({ ...formData, message: event.currentTarget.value });
  };

  const setSubject = (value: string) => {
    setFormData({ ...formData, subject: value as Subjects });
  };

  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    try {
      nameSchema.validateSync(formData.name, { abortEarly: false });
      messageSchema.validateSync(formData.message, { abortEarly: false });
      emailSchema.validateSync(formData.email, { abortEarly: false });
    } catch (e) {
      return;
    }

    setIsPending(true);
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
      .then(
        () => {
          toast.success('Success');
          setIsPending(false);
        },
        (err) => {
          setIsPending(false);
          toast.error('Error');
          setErrorMessages(err);
        },
      );
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
            errorMessage={errorMessages.name}
            onChange={setName}
            value={formData.name}
            placeholder="Full Name"
          />
          <Input
            errorMessage={errorMessages.email}
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
            errorMessage={errorMessages.message}
            onChange={setMessage}
            value={formData.message}
            placeholder="Message"
          />
          <Button
            disabled={isPending}
            onClick={handleClick}>
            <Typography variant="head4">Send Message</Typography>
          </Button>
        </div>
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
