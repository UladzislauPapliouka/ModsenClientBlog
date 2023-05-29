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
