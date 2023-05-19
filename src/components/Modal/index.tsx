import React, {
  type PropsWithChildren,
  type SyntheticEvent,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react';
import ReactDOM from 'react-dom';

import mobileBreakpoint from '@constants/breackpoints';

import styles from './modal.module.scss';

const ModalFC = React.memo<PropsWithChildren & { handleClose: () => void }>(
  ({ children, handleClose }) => {
    const backRef = useRef(null);

    const closeModalWithResize = useCallback(() => {
      if (window.innerWidth >= mobileBreakpoint) {
        handleClose();
      }
    }, [handleClose]);

    useLayoutEffect(() => {
      window.onresize = closeModalWithResize;

      return () => {
        window.onresize = () => null;
      };
    }, [closeModalWithResize]);
    const onBackgroundClickHandler = ({
      target,
    }: SyntheticEvent<HTMLDivElement>) => {
      if (backRef.current === target) {
        handleClose();
      }
    };

    const modalContainer = (
      <div
        ref={backRef}
        className={styles.modalContainer}
        onKeyDown={onBackgroundClickHandler}
        onClick={onBackgroundClickHandler}>
        {children}
      </div>
    );

    return ReactDOM.createPortal(
      modalContainer,
      document.getElementById('modalRoot') as Element,
    );
  },
);

ModalFC.displayName = 'Modal';

export default ModalFC;
