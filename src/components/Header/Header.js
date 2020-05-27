import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { FaHome, FaPlus } from 'react-icons/fa';
import { NewBoard } from './NewBoard';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #026aa7;
  padding: 4px 15px;
  height: 40px;
  box-sizing: border-box;
`;
const NavSection = styled.div`
  display: flex;
`;
const NavButton = styled(Button)`
  border: 0;
  padding: 6px;
  color: #fff;
  line-height: 1;
  background: #5f8bbe;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    box-shadow: none !important;
    background: #ffffff33 !important;
  }
`;

const HomeIcon = styled(FaHome)`
  height: 20px;
  width: 20px;
`;

const CreateIcon = styled(FaPlus)`
  font-size: 16px;
  vertical-align: middle;
`;

const Logo = styled.a`
  align-self: center;
  color: #eee;
  text-decoration: none !important;
  &:hover {
    color: #fff;
  }
`;

export const Header = () => {
  return (
    <header>
      <Navbar>
        <NavSection>
          <NavButton>
            <HomeIcon />
          </NavButton>
        </NavSection>
        <Logo href="/">Trello</Logo>
        <NavSection>
          <NewBoard>
            <NavButton>
              <CreateIcon />
            </NavButton>
          </NewBoard>
        </NavSection>
      </Navbar>
    </header>
  );
};
