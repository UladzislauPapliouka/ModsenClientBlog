import moment from 'moment';

import postImage2 from '@assets/images/photo-of-people-doing-handshakes-3183197.png';
import postImage4 from '@assets/images/photo-of-people-walking-on-hallway-3182811.png';
import postImage1 from '@assets/images/photo-of-woman-looking-at-man-3183173.png';
import postImage from '@assets/images/photo-of-woman-wearing-eyeglasses-3184405.png';
import postImage3 from '@assets/images/two-women-in-front-of-dry-erase-board-1181533.png';
import Authors from '@constants/authors';
import { Categories, type IPost } from '@typing';

const posts: Record<string | number, IPost> = {
  '1': {
    title: 'Step-by-step guide to choosing great font pairs',
    category: Categories.BUSINESS,
    author: Authors['1'],
    date: moment('20120620', 'YYYYMMDD').toDate(),
    image: postImage,
    views: 350,
    text: [
      [
        'head2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      ],
      [
        'body1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'head2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
    ],
    tags: ['Business'],
  },
  '2': {
    title: 'A UX Case Study Creating a Studious Environment for Students: ',
    category: Categories.TECHNOLOGY,
    author: Authors['2'],
    date: moment('20130620', 'YYYYMMDD').toDate(),
    image: postImage1,
    views: 650,
    text: [
      [
        'head2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      ],
      [
        'body1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'head2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
    ],
  },
  '3': {
    title: 'How to build rapport with your web design clients',
    category: Categories.STARTUP,
    author: Authors['3'],
    date: moment('20140620', 'YYYYMMDD').toDate(),
    image: postImage2,
    views: 1150,
    text: [
      [
        'head2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      ],
      [
        'body1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'head2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
    ],
  },
  '4': {
    title: 'Font sizes in UI design: The complete guide to follow',
    category: Categories.STARTUP,
    author: Authors['4'],
    date: moment('20100620', 'YYYYMMDD').toDate(),
    image: postImage3,
    views: 350,
    text: [
      [
        'head2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      ],
      [
        'body1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'head2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
    ],
  },
  '5': {
    title: '8 Figma design systems you can download for free today',
    category: Categories.BUSINESS,
    author: Authors['7'],
    date: moment('20120620', 'YYYYMMDD').toDate(),
    image: postImage4,
    views: 350,
    text: [
      [
        'head2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      ],
      [
        'body1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'head2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
      [
        'body1',
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
          '          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non\n' +
          '          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At\n' +
          '          risus viverra adipiscing at in tellus. Sociis natoque penatibus et\n' +
          '          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies\n' +
          '          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit\n' +
          '          gravida rutrum quisque non.',
      ],
    ],
  },
};

export default posts;
