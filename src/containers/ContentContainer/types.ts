import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

interface IContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: 'variant1' | 'variant2';
}
export default IContainerProps;
