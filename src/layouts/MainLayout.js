import { Outlet } from 'react-router-dom';

import MainNavbar from '../components/MainNavbar';

function MainLayout() {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
