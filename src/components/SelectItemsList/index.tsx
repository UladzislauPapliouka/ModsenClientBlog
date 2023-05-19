import React from 'react';
import { v1 } from 'uuid';

import styles from './selectItemsList.module.scss';

import { type ISelectListProps } from './types';

const SelectItemsList = <T extends { toString: () => string }>({
  options,
  handleChangeSelected,
}: ISelectListProps<T>) => {
  const handleWrapperClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className={styles.wrapper}
      onClick={handleWrapperClick}>
      {options.map((option) => {
        const handleSelect = () => {
          handleChangeSelected(option);
        };

        return (
          <span
            className={styles.option}
            key={v1()}
            onClick={handleSelect}>
            {option.toString()}
          </span>
        );
      })}
    </div>
  );
};

export default React.memo(SelectItemsList) as typeof SelectItemsList;
