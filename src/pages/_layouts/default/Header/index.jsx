import React, { useState } from 'react';

import { FaBirthdayCake, FaHome } from 'react-icons/fa';
import { AiOutlineBars } from 'react-icons/ai';
import { MdHelpOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  Container,
  Content,
  ProfileAvatar,
  MainNavigation,
  NavItem,
} from './styles';

import Sidebar from './Sidebar';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggleSidebar() {
    console.log('here');
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <Container>
      <Content>
        <ProfileAvatar>
          <img src="https://wellsadev.com/images/wells.jpg" alt="Envia" />
        </ProfileAvatar>

        <MainNavigation>
          <Link to="/dashboard">
            <NavItem>
              <FaHome />
            </NavItem>
          </Link>
          <NavItem>
            <FaBirthdayCake />
          </NavItem>
          <NavItem>
            <MdHelpOutline />
          </NavItem>
          <NavItem onClick={handleToggleSidebar}>
            <AiOutlineBars />
          </NavItem>
        </MainNavigation>

        <Sidebar isOpen={isSidebarOpen} onSetOpen={setIsSidebarOpen} />
      </Content>
    </Container>
  );
}
