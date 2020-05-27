import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../Modal/Modal';
import { ModalBackdrop } from '../Modal/ModalBackdrop';

const Container = styled.section`
  position: fixed;
  top: 44px;
  right: 5px;
  background-color: #fff;
  border-radius: 2px;
  width: 300px;
  min-width: 300px;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25),
    0 0 0 1px rgba(9, 30, 66, 0.08);
`;

const Header = styled.header`
  padding: 10px 15px;
  text-align: center;
`;

const Title = styled.h1`
  color: #5e6c84;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

const Menu = styled.ul`
  padding: 10px 0;
  margin: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  padding: 5px 10px;
  cursor: pointer;
`;

export const NewBoard = ({ children }) => {
  const [modalShown, toggleModal] = useState(false);

  const showModal = () => toggleModal(!modalShown);

  return (
    <div onClick={showModal}>
      {children}
      {modalShown && (
        <Modal>
          <ModalBackdrop></ModalBackdrop>
          <Container>
            <Header>
              <Title>Create</Title>
            </Header>
            <nav>
              <Menu>
                <MenuItem>Create Board</MenuItem>
                <MenuItem>Two</MenuItem>
                <MenuItem>Three</MenuItem>
              </Menu>
            </nav>
          </Container>
        </Modal>
      )}
    </div>
  );
};
