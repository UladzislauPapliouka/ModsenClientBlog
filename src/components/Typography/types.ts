import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

import { type typographyVariants } from '@typing';

interface ITypographyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  variant: `${typographyVariants}`;
}
export default ITypographyProps;
