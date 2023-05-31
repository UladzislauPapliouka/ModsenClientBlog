import Andrew from '@assets/images/avatars/AndrewJonson.png';
import Dianne from '@assets/images/avatars/DianneRussell.png';
import Eleanor from '@assets/images/avatars/EleanorPena.png';
import Floyd from '@assets/images/avatars/FloydMiles.png';
import Guy from '@assets/images/avatars/GuyHawkins.png';
import Jenny from '@assets/images/avatars/JennyWilson.png';
import Leslie from '@assets/images/avatars/LeslieAlexander.png';
import Robert from '@assets/images/avatars/RobertFox.png';
import { type IAuthor } from '@typing';

const Authors: Record<string | number, IAuthor> = {
  '1': {
    name: 'Andrew Jonson',
    avatar: Andrew,
    company: 'Company',
    position: 'Content Write',
    social: {
      facebook: '1',
      instagram: '1',
      linkedin: '1',
      twitter: '1',
    },
  },
  '2': {
    name: 'Floyd Miles',
    avatar: Floyd,
    company: 'Company',
    position: 'Content Write',
    social: {
      facebook: '1',
      instagram: '1',
      linkedin: '1',
      twitter: '1',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
  },
  '3': {
    name: 'Dianne Russell',
    avatar: Dianne,
    company: 'Company',
    position: 'Content Write',
    social: {
      facebook: '1',
      instagram: '1',
      linkedin: '1',
      twitter: '1',
    },
  },
  '4': {
    name: 'Jenny Wilson',
    avatar: Jenny,
    company: 'Company',
    position: 'Content Write',
    social: {
      facebook: '1',
      instagram: '1',
      linkedin: '1',
      twitter: '1',
    },
  },
  '5': {
    name: 'Leslie Alexander',
    avatar: Leslie,
    company: 'Company',
    position: 'Content Write',
    social: {
      facebook: '1',
      instagram: '1',
      linkedin: '1',
      twitter: '1',
    },
  },
  '6': {
    name: 'Guy Hawkins',
    avatar: Guy,
    company: 'Company',
    position: 'Content Write',
    social: {
      facebook: '1',
      instagram: '1',
      linkedin: '1',
      twitter: '1',
    },
  },
  '7': {
    name: 'Eleanor Pena',
    avatar: Eleanor,
    company: 'Company',
    position: 'Content Write',
    social: {
      facebook: '1',
      instagram: '1',
      linkedin: '1',
      twitter: '1',
    },
  },
  '8': {
    name: 'Robert Fox',
    avatar: Robert,
    company: 'Company',
    position: 'Content Write',
    social: {
      facebook: '1',
      instagram: '1',
      linkedin: '1',
      twitter: '1',
    },
  },
};

export default Authors;
