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
      <ul className="nav-container">
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to} className="nav-link">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
