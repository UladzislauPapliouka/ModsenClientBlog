import React from 'react';
import Typography from '@components/Typography';
import Input from '@components/Input';
import Button from '@components/Button';
import { Map, Marker } from 'pigeon-maps';
import ContentContainer from '@containers/ContentContainer';
import styles from './contacts.module.scss';

const HomePage = (): JSX.Element => (
  <div className={styles.page}>
    <ContentContainer
      variant="variant2"
      className={styles.pageTitle}>
      <Typography variant="head6">CONTACT US</Typography>
      <Typography variant="head1">Let’s Start a Conversation</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
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
        <Input placeholder="Full Name" />
        <Input placeholder="Your Email" />
        <Input placeholder="Query Related" />
        <Input placeholder="Message" />
        <Button>
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
export default HomePage;
