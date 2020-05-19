import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { FaHome, FaPlus } from 'react-icons/fa';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #026aa7;
  padding: 4px 15px;
  height: 40px;
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

const Logo = styled.a`
  align-self: center;
  color: #fff;
  text-decoration: none;
`;

export const Header = () => {
  return (
    <nav>
      <Navbar>
        <NavSection>
          <NavButton>
            <HomeIcon />
          </NavButton>
        </NavSection>
        <Logo href="/">Trello</Logo>
        <NavSection>
          <NavButton>
            <FaPlus />
          </NavButton>
        </NavSection>
      </Navbar>
    </nav>
  );
};
