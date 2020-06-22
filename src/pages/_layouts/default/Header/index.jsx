import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBirthdayCake, FaHome } from 'react-icons/fa';
import { AiOutlineBars } from 'react-icons/ai';
import { MdHelpOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Content, MainNavigation, UserName } from './styles';

import Sidebar from './Sidebar';
import ProfileAvatar from './ProfileAvatar';
import NavItem from './NavItem';
import AniversariantesModal from './AniversariantesModal';

export default function Header() {
  const userName = useSelector(state => state.user.profile.name);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aniversariantesVisible, setAniversariantesVisible] = useState(true);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  function toggleAniversariantes() {
    setAniversariantesVisible(!aniversariantesVisible);
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
            <NavItem icon={FaHome} />
          </Link>
          <NavItem icon={FaBirthdayCake} onClick={toggleAniversariantes} />
          <NavItem icon={MdHelpOutline} />
          <NavItem icon={AiOutlineBars} onMouseEnter={toggleSidebar} />
        </MainNavigation>

        <Sidebar isOpen={sidebarOpen} onSetOpen={setSidebarOpen} />
        <AniversariantesModal
          visible={aniversariantesVisible}
          onSetVisible={setAniversariantesVisible}
        />
      </Content>
    </Container>
  );
}
