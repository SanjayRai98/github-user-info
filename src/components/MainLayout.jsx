import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import AppTitle from './AppTitle';

const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
