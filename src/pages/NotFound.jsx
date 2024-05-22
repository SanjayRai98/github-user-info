import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <div>
        <Link className="go-to-home" to="/">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
