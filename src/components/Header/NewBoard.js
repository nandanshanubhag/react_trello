import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, ModalBackdrop } from '../Modal';
import { FaPlus, FaClipboard } from 'react-icons/fa';
import { NavButton } from './Header';

const AddIcon = styled(FaPlus)`
  font-size: 16px;
  vertical-align: middle;
`;

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
  margin: 0;
  padding: 0 0 10px 0;
  list-style: none;
`;

const MenuItem = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  color: #5e6c84;
  &:hover {
    background-color: #091e420a;
  }
`;

const CreateIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
`;

const LinkDescription = styled.p`
  margin: 5px 0 0 0;
  font-size: 12px;
  line-height: 16px;
`;

export const NewBoard = ({ children }) => {
  const [modalShown, changeModalState] = useState(false);

  const toggleModal = () => changeModalState(!modalShown);

  return (
    <div>
      <NavButton onClick={toggleModal}>
        <AddIcon />
      </NavButton>
      {modalShown && (
        <Modal>
          <ModalBackdrop backdropClick={toggleModal}></ModalBackdrop>
          <Container>
            <Header>
              <Title>Create</Title>
            </Header>
            <nav>
              <Menu>
                <MenuItem>
                  <CreateIcon>
                    <FaClipboard />
                  </CreateIcon>
                  <span> Create Board </span>
                  <LinkDescription>
                    A board is made up of cards ordered on lists. Use it to
                    manage projects, track information, or organize anything.
                  </LinkDescription>
                </MenuItem>
                {/* <MenuItem>Two</MenuItem>
                <MenuItem>Three</MenuItem> */}
              </Menu>
            </nav>
          </Container>
        </Modal>
      )}
    </div>
  );
};
