import React from 'react';
import type IButtonProps from '@components/Button/types';
import styles from './button.module.scss';

const Button = ({
  children,
  variant = 'primary',
  ...restProps
}: IButtonProps) => (
  <button
    className={`${styles.button} ${styles[variant]}`}
    type="button"
    {...restProps}>
    {children}
  </button>
);
export default Button;
