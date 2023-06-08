import React, {
  type FC,
  type KeyboardEvent,
  type SyntheticEvent,
  useCallback,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@components/Button';
import type ISearch from '@components/Search/types';
import SelectItemsList from '@components/SelectItemsList';
import Typography from '@components/Typography';

import styles from './search.module.scss';

const Search: FC<ISearch> = ({ onChoose, variants, placeholder }) => {
  const [t] = useTranslation();

  const [isAutoComplete, setIsAutocomplete] = useState(false);

  const [autoCompleteVariants, setAuto] = useState(variants);

  const [field, setField] = useState('');

  const onChangeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsAutocomplete(true);
    setField(e.currentTarget.value);
    setAuto(variants?.filter((variant) => variant.includes(field)));
  };

  const handleClick = () => {
    onChoose(field);
    setField('');
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setIsAutocomplete(false);
    }, 100);
  };

  const handleEnterClick = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      handleClick();
    }
  };

  const handleAutocomplete = useCallback(
    (tagName: string) => {
      onChoose(tagName);
      setField('');
      setIsAutocomplete(false);
    },
    [onChoose],
  );

  return (
    <div className={styles.container}>
      <input
        value={field}
        onBlur={handleInputBlur}
        onKeyDown={handleEnterClick}
        onChange={onChangeHandler}
        placeholder={placeholder}
        data-cy="SEARCH"
      />
      <Button
        data-cy="SEARCH_BTN"
        onClick={handleClick}>
        <Typography variant="head6">{t('category.search')}</Typography>
      </Button>
      {isAutoComplete && autoCompleteVariants && (
        <SelectItemsList
          handleChangeSelected={handleAutocomplete}
          options={autoCompleteVariants}
        />
      )}
    </div>
  );
};

export default React.memo(Search);
