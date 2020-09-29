import React, { Fragment, useState, useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import useOnOutsideClick from 'shared/hooks/onOutsideClick';
import useOnEscapeKeyDown from 'shared/hooks/onEscapeKeyDown';

import { ScrollOverlay, ClickableOverlay, StyledModal } from './styles';

const propTypes = {
  className: PropTypes.string,
  testid: PropTypes.string,
  variant: PropTypes.oneOf(['center', 'aside']),
  width: PropTypes.number,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  renderLink: PropTypes.func,
  withCloseIcon: PropTypes.bool,
  renderContent: PropTypes.func.isRequired,
};

const defaultProps = {
  className: undefined,
  testid: 'modal',
  variant: 'center',
  width: 600,
  withCloseIcon: false,
  isOpen: undefined,
  onClose: () => {},
  renderLink: () => {},
};

const Modal = ({
  className,
  testid,
  variant,
  width,
  withCloseIcon,
  isOpen: propsIsOpen,
  onClose: tellParentToClose,
  renderLink,
  renderContent,
}) => {
  const [stateIsOpen, setStateOpen] = useState(false);
  const isControlled = typeof propsIsOpen === 'boolean';
  const isOpen = isControlled ? propsIsOpen : stateIsOpen;

  const $modalRef = useRef();
  const $clickableOverlayRef = useRef();

  const closeModal = useCallback(() => {
    if (!isControlled) {
      setStateOpen(false);
    } else {
      tellParentToClose();
    }
  }, [isControlled, tellParentToClose]);

  useOnOutsideClick($modalRef, isOpen, closeModal, $clickableOverlayRef);
  useOnEscapeKeyDown(isOpen, closeModal);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  return (
    <Fragment>
      {!isControlled && renderLink({ open: () => setStateOpen(true) })}

      {isOpen &&
        ReactDOM.createPortal(
          <ScrollOverlay>
            <ClickableOverlay variant={variant} ref={$clickableOverlayRef}>
              <StyledModal
                className={className}
                variant={variant}
                width={width}
                data-testid={testid}
                ref={$modalRef}
              >
                {withCloseIcon && (
                  <button type="button" onClick={closeModal}>
                    &times;
                  </button>
                )}
                {renderContent({ close: closeModal })}
              </StyledModal>
            </ClickableOverlay>
          </ScrollOverlay>,
          $root,
        )}
    </Fragment>
  );
};

const $root = document.getElementById('donate');

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
