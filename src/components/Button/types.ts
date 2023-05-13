import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

interface IButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}
export default IButtonProps;
