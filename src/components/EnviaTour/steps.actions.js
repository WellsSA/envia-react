const IDS = {
  avatar: 'envia-avatar',
  avatarOptionBar: 'avatar-option-bar',
  sidebar: 'envia-sidebar',
  headerSidebarDisplayer: 'header-sidebar-displayer',
};

const _toggleElement = (check, active, shouldOpenCallback, openCallback) => {
  const checkElement = document.getElementById(check);

  if (shouldOpenCallback(checkElement)) {
    const activeElement = document.getElementById(active);
    openCallback(activeElement);
  }
};

const _toggleAvatar = open =>
  _toggleElement(
    IDS.avatarOptionBar,
    IDS.avatar,
    el => !el.outerText === open,
    el => el.click()
  );

let times = 0;
const _toggleSidebar = open =>
  _toggleElement(
    IDS.sidebar,
    IDS.headerSidebarDisplayer,
    el => !el.outerText === open && times++ % 2,
    el => el.click()
  );

const openAvatar = () => _toggleAvatar(true);

const closeAvatar = () => _toggleAvatar(false);

const openSidebar = () => _toggleSidebar(true);

const closeSidebar = () => _toggleSidebar(false);

export { openAvatar, closeAvatar, openSidebar, closeSidebar };
