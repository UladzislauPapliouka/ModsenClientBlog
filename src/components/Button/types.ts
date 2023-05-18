import { type ButtonHTMLAttributes, type HTMLProps } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}
export default IButtonProps;
