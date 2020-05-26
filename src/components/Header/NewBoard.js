import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { ModalBackdrop } from '../Modal/ModalBackdrop';

export const NewBoard = ({ children }) => {
  const [modalShown, toggleModal] = useState(false);

  const showModal = () => toggleModal(!modalShown);

  return (
    <div onClick={showModal}>
      {children}
      {modalShown && (
        <Modal>
          <ModalBackdrop></ModalBackdrop>
        </Modal>
      )}
    </div>
  );
};
