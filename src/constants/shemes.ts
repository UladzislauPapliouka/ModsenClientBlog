import { string } from 'yup';

const emailSchema = string()
  .required()
  .test(
    'is-email',
    (d) => `Incorrect email`,
    (value) => {
      const isEmail = !!value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );

      return isEmail;
    },
  );

export default emailSchema;
