import React, { type DetailedHTMLProps, type HTMLAttributes } from 'react';

import styles from './input.module.scss';

const TextArea = ({
  errorMessage,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  errorMessage?: string | undefined;
  value?: string | undefined;
  name?: string;
}) => (
  <div className={`${styles.wrapper} ${errorMessage && styles.error}`}>
    <textarea
      {...props}
      className={`${styles.input}`}
    />
    <label>{errorMessage}</label>
  </div>
);

export default React.memo(TextArea);
