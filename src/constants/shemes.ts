import { object, string } from 'yup';

const emailSchema = string()
  .required('Please enter your email')
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

export const nameSchema = string()
  .required('Please enter your name')
  .min(3)
  .max(12);
export const messageSchema = string().max(150);
export const contactFormSchema = object({
  name: nameSchema,
  email: emailSchema,
  message: messageSchema,
});

export default emailSchema;
