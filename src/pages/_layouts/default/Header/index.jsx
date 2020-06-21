import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBirthdayCake, FaHome } from 'react-icons/fa';
import { AiOutlineBars } from 'react-icons/ai';
import { MdHelpOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  Container,
  Content,
  MainNavigation,
  NavItem,
  UserName,
} from './styles';

import Sidebar from './Sidebar';
import ProfileAvatar from './ProfileAvatar';

export default function Header() {
  const userName = useSelector(state => state.user.profile.name);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <Container>
      <Content>
        <>
          <ProfileAvatar />
          <UserName>
            <span>{userName}</span>
          </UserName>
        </>
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
          <NavItem onMouseEnter={handleToggleSidebar}>
            <AiOutlineBars />
          </NavItem>
        </MainNavigation>

        <Sidebar isOpen={isSidebarOpen} onSetOpen={setIsSidebarOpen} />
      </Content>
    </Container>
  );
}
