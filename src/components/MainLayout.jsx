import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import AppTitle from './AppTitle';
import githubImage from './../images/Collaboration-DarkMode-2.webp';

const MainLayout = () => {
  return (
    <div className="app-img">
      <img src={githubImage} alt="Git hub image" className="a-img"></img>
      <AppTitle />
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
