import React, { type DetailedHTMLProps, type HTMLAttributes } from 'react';

import styles from './input.module.scss';

const Input = ({
  errorMessage,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  errorMessage?: string | undefined;
  value?: string | undefined;
  name?: string;
}) => (
  <div className={`${styles.wrapper} ${errorMessage && styles.error}`}>
    <input
      {...props}
      className={`${styles.input}`}
    />
    <label>{errorMessage}</label>
  </div>
);

export default React.memo(Input);
