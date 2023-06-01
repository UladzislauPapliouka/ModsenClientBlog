import toast from 'react-hot-toast';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
  en: {
    translation: {
      categories: {
        business: {
          title: 'Business',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        },
        startup: {
          title: 'Startup',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        },
        economy: {
          title: 'Economy',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        },
        technology: {
          title: 'Technology',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        },
      },
      joinUs: {
        title: 'Join our team to be a part of our story',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        buttonText: 'Join Us',
      },
      links: {
        Home: 'Home',
        Blog: 'Blog',
        'About Us': 'About Us',
        'Contact Us': 'Contact us',
        'Privacy Policy': 'Privacy Policy',
        Video: 'Video about us',
      },
      footer: {
        'Subscribe message':
          'Subscribe to our news letter to get latest updates and news',
        Subscribe: 'Subscribe',
        Placeholder: 'Enter Your Email',
      },
      privacyPolicy: {
        pageTitle: 'Privacy Policy',
        lastUpdate: 'Last Updated on {{date}}',
        head1: 'Lorem ipsum dolor sit amet',
        head2:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        body1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
        viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
        Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus
        mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
        Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi
        morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla
        aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu
        lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce
        ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae
        tempus quam.`,
        body2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem
        sed risus ultricies tristique nulla aliquet enim. Volutpat blandit
        aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum
        suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque
        convallis a cras semper auctor neque vitae tempus quam. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
        Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
        at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
        Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
        egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet
        nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies
        tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit.
        Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida
        dictum fusce ut placerat orci nulla. Neque convallis a cras semper
        auctor neque vitae tempus quam.`,
      },
      contacts: {
        contactsUs: 'Contact US',
        letsConversation: 'Let’s Start a Conversation',
        lowerText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
        workingHours: 'Working hours',
        workingDays: 'Monday to Friday',
        workingText: 'Our Support Team is available 24/7',
        buttonText: 'Send Message',
        placeholderName: 'Full Name',
        placeholderEmail: 'Your Email',
        placeholderMessage: 'Message',
      },
      posts: {
        featuredPost: 'FEATURED POST',
        readMore: 'Read more',
        whatToRead: 'What to read next',
        allPosts: 'All Posts',
        next: 'Next',
        prev: 'Prev',
        allCategories: 'All Categories',
        viewAll: 'View all',
      },
      home: {
        lastPost: {
          postType: 'Posted on',
        },
        aboutUs: {
          title: 'ABOUT US',
          mission: 'OUR MISSION',
          ourDescriptionTitle:
            'We are a community of content writers who share their learnings',
          ourDescriptionText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
            '            eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          missionTitle:
            'We are a community of content writers who share their learnings\n',
          missionText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
            '            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
            '            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
            '            aliquip ex ea commodo consequat.',
        },
        chooseCategory: 'Choose A Category',
        whyWeStarted: {
          why: 'WHY WE STARTED',
          title:
            ' It started out as a simple idea and evolved into our passion',
          text:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
            '            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
            '            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
            '            aliquip.',
          button: 'Discovery our story',
        },
        listOfAuthors: 'List of Authors',
      },
      author: {
        myPosts: 'My Posts',
        hi: 'Hey there, I’m {{name}} and welcome to my Blog',
      },
      aboutUs: {
        description: {
          title1: 'Our team of creatives',
          subtitle1:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
            'eiusmod tempor incididunt.',
          text1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.`,
          title2: 'Why we started this Blog',
          subtitle2:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
            'eiusmod tempor incididunt.',
          text2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.`,
        },
        mission: {
          title1: 'Our mision',
          subtitle1:
            'Creating valuable content for creatives all around the world',
          text1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.`,
          title2: 'Our Vision',
          subtitle2: 'A platform that empowers individuals to improve',
          text2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.`,
        },
        mainBlock: {
          primaryInfo: {
            subtitle: 'ABOUT US',
            title: 'We are a team of content writers who share their learnings',
          },
          secondaryInfo:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          stats1: {
            title: 'Blog Published',
            value: '12+',
          },
          stats2: {
            title: 'Views of Finswest',
            value: '18K+',
          },
          stats3: {
            title: 'Total active users',
            value: '30K+',
          },
        },
      },
      category: {
        blog: 'BLOG',
        categories: 'Categories',
        allTags: 'All Tags',
        search: 'Search',
        placeholder: 'Search for tags',
      },
    },
  },
  ru: {
    translation: {
      categories: {
        business: {
          title: 'Бизнес',
          text: 'Бизнес – это круту',
        },
        startup: {
          title: 'Стартап',
          text: 'Стартап - это современно',
        },
        economy: {
          title: 'Экономика',
          text: 'Экономь, но не скупись',
        },
        technology: {
          title: 'Технологии',
          text: 'На шаг впереди',
        },
      },
      joinUs: {
        title:
          'Присоединяйтесь к нашей команде, чтобы стать частью нашей истории',
        text: 'Таким образом, дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации дальнейших направлений развития проекта. Разнообразный и...',
        buttonText: 'Присоедениться',
      },
      links: {
        Home: 'Главная',
        Blog: 'Блог',
        'About Us': 'О нас',
        'Contact Us': 'Контакты',
        'Privacy Policy': 'Политика конфеденциальности',
        Video: 'Видео о нас',
      },
      footer: {
        'Subscribe message':
          'Подпишитесь на нашу новостную рассылку, чтобы получать последние обновления и новости',
        Subscribe: 'Подписаться',
        Placeholder: 'Введите вашу почту',
      },
      privacyPolicy: {
        pageTitle: 'Политика конфеденциальности',
        lastUpdate: 'Обновлено {{date}}',
        head1: 'Не следует, однако, забывать о...',
        head2:
          'Равным образом дальнейшее развитие различных форм деятельности напрямую зависит от...',
        body1: `С другой стороны новая модель организационной деятельности способствует подготовке и реализации соответствующих условий активизации. Не следует, однако, забывать о том, что начало повседневной работы по формированию позиции позволяет выполнить важнейшие задания по разработке позиций, занимаемых участниками в отношении поставленных задач.

Дорогие друзья, постоянный количественный рост и сфера нашей активности создаёт предпосылки качественно новых шагов для модели развития. Практический опыт показывает, что дальнейшее развитие различных форм деятельности способствует подготовке и реализации направлений прогрессивного развития. Задача организации, в особенности же социально-экономическое развитие позволяет выполнить важнейшие задания по разработке новых предложений!

Повседневная практика показывает, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание экономической целесообразности принимаемых решений. Не следует, однако, забывать о том, что постоянный количественный рост и сфера нашей активности позволяет оценить значение новых предложений. Практический опыт показывает, что новая модель организационной деятельности требует определения и уточнения форм воздействия.

Равным...`,
        body2: `Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требует от нас анализа системы масштабного изменения ряда параметров.

С другой стороны консультация с профессионалами из IT представляет собой интересный эксперимент проверки существующих финансовых и административных условий. Разнообразный и богатый опыт консультация с профессионалами из IT представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач?

Задача организации, в особенности же новая модель организационной деятельности способствует подготовке и реализации соответствующих условий активизации? Дорогие друзья, повышение уровня гражданского сознания играет важную роль в формировании дальнейших направлений развития проекта.

Значимость этих проблем настолько очевидна, что сложившаяся структура...`,
      },
      contacts: {
        contactsUs: 'Контакты',
        letsConversation: 'Начните общение',
        lowerText:
          'С другой стороны выбранный нами инновационный путь влечет за собой процесс внедрения и модернизации новых...',
        workingHours: 'Рабочие часы',
        workingDays: 'С понедельника по пятницу',
        workingText: 'Круглосуточная поддержка',
        buttonText: 'Отправить',
        placeholderName: 'Имя',
        placeholderEmail: 'Почта',
        placeholderMessage: 'Сообщение',
      },
      posts: {
        featuredPost: 'Набирающий популярность',
        readMore: 'Читать дальше',
        whatToRead: 'Читать почитать ещё',
        allPosts: 'Все посты',
        next: 'Вперёд',
        prev: 'Назад',
        allCategories: 'Все категории',
        viewAll: 'Больше',
      },
      home: {
        lastPost: {
          postType: 'Последний пост в категории',
        },
        aboutUs: {
          title: 'О НАС',
          mission: 'НАША МИССИЯ',
          ourDescriptionTitle:
            'Мы сообщество авторов контента, которые делятся своими знаниями\n',
          ourDescriptionText:
            'Разнообразный и богатый опыт консультация с профессионалами из IT позволяет оценить значение модели развития.\n' +
            '\n' +
            'Соображения высшего порядка, а также дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки существующих...',
          missionTitle:
            'Мы сообщество авторов контента, которые делятся своими знаниями\n',
          missionText:
            'Разнообразный и богатый опыт консультация с профессионалами из IT позволяет оценить значение модели развития.\n' +
            '\n' +
            'Соображения высшего порядка, а также дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки существующих...',
        },
        chooseCategory: 'Выберите категорию',
        whyWeStarted: {
          why: 'ЗАЧЕМ НАЧИНАЛИ',
          title: 'Это началось как простая идея и превратилось в нашу страсть',
          text:
            'Практический опыт показывает, что дальнейшее развитие различных форм деятельности способствует подготовке и реализации системы масштабного изменения ряда параметров.\n' +
            '\n' +
            'Задача организации,...',
          button: 'Наша история',
        },
        listOfAuthors: 'Наши авторы',
      },
      author: {
        myPosts: 'Мои публикации',
        hi: 'Привет, Я {{name}}  добро пожаловать на мой блог ',
      },
      aboutUs: {
        description: {
          title1: 'Наша команда креативщиков',
          subtitle1:
            'Таким образом, выбранный нами инновационный путь напрямую зависит ',
          text1: `Таким образом, дальнейшее развитие различных форм деятельности способствует подготовке и реализации форм воздействия.

Не следует, однако, забывать о том, что постоянное`,
          title2: 'Почему мы начали этот блог',
          subtitle2:
            'Таким образом, выбранный нами инновационный путь напрямую ',
          text2: `Таким образом, дальнейшее развитие различных форм деятельности способствует подготовке и реализации форм воздействия.

Не следует, однако, забывать о том, что постоянное информационно-техническое `,
        },
        mission: {
          title1: 'Наша миссия',
          subtitle1: 'Создание ценного контента для креативщиков по всему миру',
          text1: `Таким образом, дальнейшее развитие различных форм деятельности способствует подготовке и реализации форм воздействия.

Не следует, однако, забывать о том, что постоянное`,
          title2: 'Наше виденье',
          subtitle2: 'Платформа, которая позволяет людям совершенствоваться',
          text2: `Таким образом, дальнейшее развитие различных форм деятельности способствует подготовке и реализации форм воздействия.

Не следует, однако, забывать о том, что постоянное информационно-техническое `,
        },
        mainBlock: {
          primaryInfo: {
            subtitle: 'О нас',
            title:
              'Мы команда авторов контента, которые делятся своими знаниями',
          },
          secondaryInfo:
            'Таким образом, дальнейшее развитие различных форм деятельности способствует подготовке и реализации форм воздействия. Таким образом, дальнейшее развитие различных форм деятельности способствует подготовке и реализации форм воздействия.',
          stats1: {
            title: 'Публикаций',
            value: '12+',
          },
          stats2: {
            title: 'Просмотров Finswest',
            value: '18K+',
          },
          stats3: {
            title: 'Всего активных пользователей',
            value: '30K+',
          },
        },
      },
      category: {
        blog: 'БЛОГ',
        categories: 'Категории',
        allTags: 'Все теги',
        placeholder: 'Поиск по тегу',
        search: 'Поиск',
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .catch(() => toast.error('Locale error'));

export default i18n;
