import React, { useLayoutEffect, useRef, useState } from 'react';

import { CheckIcon } from '@assets/social';
import SelectItemsList from '@components/SelectItemsList';

import styles from './customSelect.module.scss';

import { type ICustomSelectProps } from './types';

const CustomSelect = <T extends { toString: () => string }>({
  options,
  selected,
  onChangeSelected,
  name,
}: ICustomSelectProps<T> & { name?: string }) => {
  const [isActive, setIsActive] = useState(false);

  const selectRef = useRef(null);

  useLayoutEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target !== selectRef.current) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [selectRef]);
  const toggleSelect = () => {
    setIsActive((prevStatus) => !prevStatus);
  };

  const handleChangeSelected = (value: T) => {
    toggleSelect();
    onChangeSelected(value);
  };

  return (
    <div
      className={styles.wrapper}
      data-cy="select"
      ref={selectRef}
      onClick={toggleSelect}>
      <div className={styles.selected}>
        <span>{selected}</span>
        <div className={`${styles.selectArrow} ${isActive && styles.active}`}>
          <CheckIcon />
        </div>
      </div>
      {isActive && (
        <SelectItemsList
          options={options}
          handleChangeSelected={handleChangeSelected}
        />
      )}
    </div>
  );
};

export default React.memo(CustomSelect) as typeof CustomSelect;
