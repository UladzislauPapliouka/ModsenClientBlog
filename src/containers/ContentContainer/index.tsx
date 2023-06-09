import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import styles from './contentContainer.module.scss';

import type IContainerProps from './types';

const ContentContainer = forwardRef<any, IContainerProps>(
  ({ className, children, variant = 'variant1', ...restProps }, ref) => {
    const divRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      hide() {
        divRef.current!.style.display = 'none';
      },
      show() {
        divRef.current!.style.display = 'flex';
      },
    }));

    return (
      <div
        ref={divRef}
        className={`${styles.container} ${className} ${styles[variant]}`}
        {...restProps}>
        {children}
      </div>
    );
  },
);

ContentContainer.displayName = 'ContentContainer';

export default ContentContainer;
