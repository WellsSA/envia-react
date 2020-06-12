import React, { useState } from 'react';

import { FaBirthdayCake, FaHome } from 'react-icons/fa';
import { AiOutlineBars } from 'react-icons/ai';
import { MdHelpOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Content, MainNavigation, NavItem } from './styles';

import Sidebar from './Sidebar';
import ProfileAvatar from './ProfileAvatar';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <Container>
      <Content>
        <ProfileAvatar />
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
