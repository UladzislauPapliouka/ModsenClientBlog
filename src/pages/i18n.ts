import toast from 'react-hot-toast';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
  en: {
    translation: {
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
    },
  },
  ru: {
    translation: {
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
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
        workingHours: 'Рабочие часы',
        workingDays: 'С понедельника по пятницу',
        workingText: 'Круглосуточная поддержка',
        buttonText: 'Отправить',
        placeholderName: 'Имя',
        placeholderEmail: 'Почта',
        placeholderMessage: 'Сообщение',
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