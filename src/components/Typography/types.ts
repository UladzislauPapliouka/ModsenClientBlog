import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

enum typographyVariants {
  display = 'display',
  head1 = 'head1',
  head2 = 'head2',
  head3 = 'head3',
  head4 = 'head4',
  head5 = 'head5',
  head6 = 'head6',
  body1 = 'body1',
  body2 = 'body2',
  label = 'label',
}
interface ITypographyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  variant: `${typographyVariants}`;
}
export default ITypographyProps;
