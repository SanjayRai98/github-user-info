import { Link } from 'react-router-dom';

const LINKS = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Starred',
    to: '/starred',
  },
];

const Nav = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
