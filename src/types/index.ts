import { type StaticImageData } from 'next/image';

export enum typographyVariants {
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
export enum Categories {
  STARTUP = 'startup',
  BUSINESS = 'business',
  ECONOMY = 'economy',
  TECHNOLOGY = 'technology',
}
export interface IAuthor {
  name: string;
  avatar: StaticImageData;
  social: ISocial;
  company: string;
  position: string;
  description?: string;
  id: string | number;
}
export interface IPost {
  title: string;
  category: Categories;
  author: IAuthor;
  date: Date;
  image: StaticImageData;
  views: number;
  text: Array<[`${typographyVariants}`, string]>;
  tags?: Array<`${Tags}`>;
}
export interface IPostWithId extends IPost {
  id: string | number;
}
export interface ISocial {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}
export enum Tags {
  BUSINESS = 'Business',
  EXPERIENCE = 'Experience',
  SCREEN = 'Screen',
  TECHNOLOGY = 'Technology',
  MARKETING = 'Marketing',
  LIFE = 'Life',
}
