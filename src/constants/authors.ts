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
  },
  '2': {
    name: 'Floyd Miles',
    avatar: Floyd,
  },
  '3': {
    name: 'Dianne Russell',
    avatar: Dianne,
  },
  '4': {
    name: 'Jenny Wilson',
    avatar: Jenny,
  },
  '5': {
    name: 'Leslie Alexander',
    avatar: Leslie,
  },
  '6': {
    name: 'Guy Hawkins',
    avatar: Guy,
  },
  '7': {
    name: 'Eleanor Pena',
    avatar: Eleanor,
  },
  '8': {
    name: 'Robert Fox',
    avatar: Robert,
  },
};

export default Authors;
