import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'shared/components/Modal';
import { useConfetti } from './hooks';
import { Note } from './styles';

const Thanks = ({ onClose }) => {
  useConfetti();

  return (
    <Modal
      isOpen
      width={1040}
      withCloseIcon={false}
      renderContent={() => (
        <Note>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <h1>Thanks! 🎉</h1>
          <p>Thank you for your donation</p>
        </Note>
      )}
      onClose={onClose}
    />
  );
};

Thanks.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Thanks;
