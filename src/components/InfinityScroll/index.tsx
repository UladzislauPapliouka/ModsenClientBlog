import React, {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import useElementOnScreen from '@hooks/useElementOnScreen';

import styles from './index.module.scss';

import type { InfinityScrollProps } from './types';

const InfinityScroll = ({ wrapper, children }: InfinityScrollProps) => {
  const [componentsRendered, setComponentsRendered] = useState(1);

  const [lastElementRef, isOnScreen] = useElementOnScreen();

  const wrapperRef = useRef<HTMLElement>(null);

  const renderNewElement = useCallback(() => {
    if (wrapperRef.current !== null) {
      const isAllRendered = componentsRendered > Children.count(children) - 1;

      if (isOnScreen && !isAllRendered) {
        setComponentsRendered(componentsRendered + 1);
      }
    }
  }, [isOnScreen, wrapperRef]);

  useEffect(() => {
    if (isOnScreen) {
      renderNewElement();
    }
  }, [isOnScreen]);

  const childrenToRender = Children.map(children, (child, index) => {
    if (index + 1 <= componentsRendered) {
      return child;
    }

    return null;
  });

  const WrapperWithRef = cloneElement(wrapper, {
    ref: wrapperRef,
    children: childrenToRender,
    className: `${wrapper.props.className} ${styles.wrapper}`,
  });

  return (
    <>
      {WrapperWithRef}
      <div ref={lastElementRef} />
    </>
  );
};

export default InfinityScroll;
