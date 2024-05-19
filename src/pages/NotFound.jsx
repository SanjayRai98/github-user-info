import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      404 Not Found
      <div>
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
