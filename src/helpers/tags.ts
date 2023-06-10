import toast from 'react-hot-toast';
import { type NextRouter } from 'next/router';

const changeTags = (key: string, value: string, router: NextRouter) => {
  router
    .push(
      {
        pathname: router.pathname,
        query: {
          category: router.query.category,
          [key]: value,
        },
      },
      undefined,
      { shallow: true },
    )
    .catch(() => toast.error('Something went wrong...'));
};

const filterTagsValue = (tags: string, workingTag: string) =>
  tags
    ?.split('&')
    .filter((tag) => tag !== workingTag)
    .join('&');

export { changeTags, filterTagsValue };
