import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Github user Info</h1>
      Home Page
      <div>
        <Link to="/starred">Go to Starred Page</Link>
      </div>
      <div>
        <Link to="/userpage">Go to User Page Page</Link>
      </div>
    </div>
  );
};

export default Home;
