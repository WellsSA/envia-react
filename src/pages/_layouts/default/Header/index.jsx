import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBirthdayCake, FaHome } from 'react-icons/fa';
import { AiOutlineBars } from 'react-icons/ai';
import { MdHelpOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Content, MainNavigation, UserName } from './styles';

import Sidebar from './Sidebar';
import ProfileAvatar from './ProfileAvatar';
import NavItem from './NavItem';
import AniversariantesModal from './AniversariantesModal';
import { setAniversariantes } from '~/store/modules/message/actions';
import { updateFirstAccess } from '~/store/modules/user/actions';

export default function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.profile.name);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  function openAniversariantes() {
    dispatch(setAniversariantes({ open: true }));
  }

  function openTour() {
    dispatch(updateFirstAccess({ to: true }));
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
          <NavItem icon={FaBirthdayCake} onClick={openAniversariantes} />
          <NavItem icon={MdHelpOutline} onClick={openTour} />
          <NavItem
            id="header-sidebar-displayer"
            icon={AiOutlineBars}
            onClick={toggleSidebar}
          />
        </MainNavigation>

        <Sidebar isOpen={sidebarOpen} onSetOpen={setSidebarOpen} />
        <AniversariantesModal />
      </Content>
    </Container>
  );
}
